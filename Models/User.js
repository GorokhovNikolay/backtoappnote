const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({
    number: {type: Number, unique: true, required: true},
    password: {type: String, required: true},
    expire_at: {
        type: Date,
        default: Date.now(),
        expires: 900
    }

},
{timestamps: true})
UserSchema.index({ "expire_at": 1 }, { expireAfterSeconds: 5 });
module.exports = mongoose.model('User', UserSchema)