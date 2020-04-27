const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable cors
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/v1/stores", require("./routes/stores"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(
    `Spoonbills running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
