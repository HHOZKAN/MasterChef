import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    mdp: {
        type: String,
        required: true
    },
    niveau: {
        type: Number,
        required: true,
        default: 1
    }
},
    {
        timestamps: true,
    }
)

const User = mongoose.model('User', userSchema);

export default User;