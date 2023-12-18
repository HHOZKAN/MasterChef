import mongoose from "mongoose";

const levelSchema = mongoose.Schema({
    experienceThreshold: {
        type: Number,
        required: true
    },
    benefits: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
    }
)

const Level = mongoose.model('Level', levelSchema);

export default Level;
