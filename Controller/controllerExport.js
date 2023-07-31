const bycript = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Models/User')
const Notes = require('../Models/Notes')

module.exports.export = async (req, res) => {

    try {
        const getRandomNumber = (min, max) => {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min) + min)
          }
        
        const number = getRandomNumber(1,9999)
        const password = getRandomNumber(1,99999)
        const notesStr = req.body
      
        
        const condidate = await User.findOne({number})
        if(condidate){
            return res.status(400).json({message:`Пользяватель c email  уже существует`})
        }
        
        const user = await new User({  
            number,
            password
        }).save()
        await new Notes({
            notes: notesStr,
            user: user._id
        }).save()
        
        res.status(200).json({user})
        
    } catch (error) {
        console.log(error)
    }
}


