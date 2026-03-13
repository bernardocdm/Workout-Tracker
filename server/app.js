const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

app.get('/', (req, res) => {
    res.send("API now running");
});

module.exports = app;