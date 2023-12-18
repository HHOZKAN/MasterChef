import mongoose from "mongoose";

const userProgressSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    lessonId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson',
        required: true
    },
    exercisesCompletionPercentage: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['not started', 'in progress', 'completed']
    }
},
    {
        timestamps: true,
    }
)

const UserProgress = mongoose.model('UserProgress', userProgressSchema);

export default UserProgress;
