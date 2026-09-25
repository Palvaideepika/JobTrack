const express = require("express");
const Application = require("../models/Application");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Middleware to verify JWT
const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Not authorized"
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.userId = decoded.userId;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
};

// Add application
router.post("/", protect, async (req, res) => {
  try {
    const application = await Application.create({
      ...req.body,
      user: req.userId
    });

    res.status(201).json({
      message: "Application added successfully",
      application
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add application",
      error: error.message
    });
  }
});

// Get user's applications
router.get("/", protect, async (req, res) => {
  try {
    const applications = await Application.find({
      user: req.userId
    }).sort({ createdAt: -1 });

    res.json(applications);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch applications",
      error: error.message
    });
  }
});

// Update application
router.put("/:id", protect, async (req, res) => {
  try {
    const application = await Application.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.userId
      },
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!application) {
      return res.status(404).json({
        message: "Application not found"
      });
    }

    res.json({
      message: "Application updated successfully",
      application
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update application",
      error: error.message
    });
  }
});

// Delete application
router.delete("/:id", protect, async (req, res) => {
  try {
    const application = await Application.findOneAndDelete({
      _id: req.params.id,
      user: req.userId
    });

    if (!application) {
      return res.status(404).json({
        message: "Application not found"
      });
    }

    res.json({
      message: "Application deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete application",
      error: error.message
    });
  }
});

module.exports = router;