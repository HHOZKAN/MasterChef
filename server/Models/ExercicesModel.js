// ExerciseModel.js
import mongoose from 'mongoose';

const exercisesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subExercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubExercise'
    }]
    // Ajoutez d'autres champs si nécessaire
});

const Exercises = mongoose.model('Exercises', exercisesSchema);

export default Exercises;