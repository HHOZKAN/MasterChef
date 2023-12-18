import mongoose from "mongoose";

const lessonSchema = mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,
    }
)

const Lesson = mongoose.model('Lesson', lessonSchema);

export default Lesson;
