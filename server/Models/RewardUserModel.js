import mongoose from "mongoose";

const rewardSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    conditions: {
        type: String,
        required: true
    },
    userIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
},
    {
        timestamps: true,
    }
)

const Reward = mongoose.model('Reward', rewardSchema);

export default Reward;
