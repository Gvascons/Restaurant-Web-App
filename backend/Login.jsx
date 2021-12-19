const express = require('express');
const cors = require('cors');

const data = require('./db.json')

const app = express();

app.use(cors());

app.get("/api", (req,res) => {
    res.json(data);
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})