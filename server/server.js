require("dotenv").config();

// Dependencies
const express = require("express");
const bodyParser = require("body-parser");

// Middleware for database connection
const connectDB = require("./api/config/db");

// Route Modules
const userRouter = require("./api/routes/userRouter");

const app = express();

// Configure app
app.use(bodyParser.json());

// Connect to database
connectDB();

// Routes
app.use("/user", userRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
})