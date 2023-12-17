import express from 'express';
import cours from './data/Product.js';

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

app.listen(5000, console.log("Server is running on port 5000"));