const jwt = require('jsonwebtoken')

module.exports.token = () => {
    const generateToken = (payload) =>{
        const acessToken = jwt.sign(payload, process.env.JWT_ACESS, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH, {expiresIn: '30d'})
        return{
            acessToken, refreshToken
        }
    }

}