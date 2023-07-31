const Notes = require('../Models/Notes')
const User = require('../Models/User')


module.exports.import = async (req, res) => {

    try {
        const number = req.body.number
        const password = req.body.password

        const user = await User.findOne({number})
        if(!user){
        return res.json({message: 'Пользаватель с таким email не найден'})
        }
        
         
        if(user.password === password){
        
        const notes = await Notes.findOne({user:user._id})
        
         return res.status(200).json({notes:notes.notes})
         }
         

          res.status(200).json({message: 'Вход выполнен успешно'})
        
    } catch (error) {
        console.log(error) 
    }
}

