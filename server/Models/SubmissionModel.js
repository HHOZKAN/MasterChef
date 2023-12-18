import mongoose from "mongoose";

const submissionSchema = mongoose.Schema({
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
    submittedCode: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
    }
)

const Submission = mongoose.model('Submission', submissionSchema);

export default Submission;
 