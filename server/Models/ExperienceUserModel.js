import mongoose from "mongoose";

const userExperienceSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    experiencePoints: {
        type: Number,
        default: 0
    },
    currentLevel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Level',
        required: true
    }
},
    {
        timestamps: true,
    }
)

const UserExperience = mongoose.model('UserExperience', userExperienceSchema);

export default UserExperience;
