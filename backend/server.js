const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const authRoutes = require("./routes/authRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "JobTrack API is running successfully!"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`JobTrack backend running on http://localhost:${PORT}`);
});