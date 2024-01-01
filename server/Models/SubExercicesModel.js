// SubExerciseModel.js
import mongoose from 'mongoose';

const subExercisesSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
    // Ajoutez d'autres champs si nécessaire
});

const SubExercises = mongoose.model('SubExercises', subExercisesSchema);

export default SubExercises;