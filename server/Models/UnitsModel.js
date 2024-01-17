// UnitModel.js
import mongoose from 'mongoose';

const unitsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise'
    }]
});

const Units = mongoose.model('Units', unitsSchema);

export default Units;