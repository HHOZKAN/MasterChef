import express from 'express';
import cours from './data/Cours.js';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';
import ImportData from './DataImport.js';
import coursRoute from './Routes/CoursRoutes.js';
import { errorHandler, notFound } from './Middleware/Error.js';

dotenv.config();

connectDatabase();

const app = express();

// API

app.use('/api/import', ImportData);
app.use("/api/cours", coursRoute);

// ERROR HANDLER MIDDLEWARES
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, console.log("Server is running on port" , PORT));

