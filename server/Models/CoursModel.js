import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true,
        enum: ['beginner', 'intermediate', 'experienced']
    },
    estimatedDuration: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,
    }
)

const Course = mongoose.model('Course', courseSchema);

export default Course;
