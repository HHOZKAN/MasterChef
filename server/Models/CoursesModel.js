import mongoose from "mongoose";

const coursesSchema = mongoose.Schema({
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

const Courses = mongoose.model('Course', coursesSchema);

export default Courses;
