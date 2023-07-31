const mongoose = require('mongoose')

const NotesSchema = new mongoose.Schema ({
    user: {ref: 'User', type: mongoose.Schema.Types.ObjectId },
    notes: {type: Object},
    expire_at: {
        type: Date,
        default: Date.now(),
        expires: 900
    }
},
{timestamps: true})
NotesSchema.index({ "expire_at": 1 }, { expireAfterSeconds: 5 });

module.exports = mongoose.model('Notes', NotesSchema)