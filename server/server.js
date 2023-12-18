import express from 'express';
import cours from './data/Product.js';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';

dotenv.config();

connectDatabase();

const app = express();

// ! LOAD PRODUCT FROM SERVER
app.get("/api/products", (req, res) => {
    res.json(cours)
});

// ! SINGLE PRODUCT FROM SERVER
app.get("/api/products/:id", (req, res) => {
    const cour = cours.find((p) => p._id === req.params.id);
    res.json(cour)
});

app.get("/", (req, res) => {
    res.send("Api is running...")
});

const PORT = process.env.PORT;

app.listen(PORT, console.log("Server is running on port" , PORT));

