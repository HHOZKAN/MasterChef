import mongoose from "mongoose";

const solutionSchema = mongoose.Schema({
    exerciseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise',
        required: true
    },
    codeSolution: {
        type: String,
        required: true
    },
    difficultyLevel: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true
    }
},
    {
        timestamps: true,
    }
)

const Solution = mongoose.model('Solution', solutionSchema);

export default Solution;
