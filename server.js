require("dotenv").config();
const express = require("express");
const connectDB = require("./api/config/db");

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
})