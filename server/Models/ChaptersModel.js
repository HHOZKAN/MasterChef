// ChapterModel.js
import mongoose from 'mongoose';

const chaptersSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    units: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Unit'
    }]
    // Ajoutez d'autres champs si nécessaire
});

const Chapters = mongoose.model('Chapter', chapterSchema);

export default Chapters;