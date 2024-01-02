import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
    lessonId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
    }
)

const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;
 