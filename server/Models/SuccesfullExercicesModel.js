import mongoose from "mongoose";

const successfulExercisesSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    exerciseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise',
        required: true
    },
    lessonId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson',
        required: true
    }
},
    {
        timestamps: true,
    }
)

const SuccessfulExercises = mongoose.model('SuccessfulExercises', successfulExercisesSchema);

export default SuccessfulExercises;
