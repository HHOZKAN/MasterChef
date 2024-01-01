import express from 'express';
import User from './models/UserModel.js';
import users from './data/users.js';
import Course from './Models/CoursesModel.js';
import cours from './data/Cours.js';
import asyncHandler from 'express-async-handler';

const ImportData = express.Router();

ImportData.post('/user', asyncHandler (
    async (req, res) => {
        await User.deleteMany({})
        const importUser = await User.insertMany(users)
        res.send({ importUser })
    }
));

ImportData.post('/cours', asyncHandler (
    async (req, res) => {
        await Course.deleteMany({})
        const importCours = await Course.insertMany(cours)
        res.send({ importCours })
    }
));

export default ImportData;

