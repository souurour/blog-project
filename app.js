const express = require("express");
const connectToDb = require("./config/db");
require("dotenv").config();
// Connection To Db
connectToDb();

// Init App
const app = express();

// Middlewares
app.use(express.json());

// Running The Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
    console.log(
        `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);