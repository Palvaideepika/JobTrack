const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    company: {
      type: String,
      required: true,
      trim: true
    },

    jobTitle: {
      type: String,
      required: true,
      trim: true
    },

    location: {
      type: String,
      trim: true
    },

    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship", "Contract", "Other"],
      default: "Full-time"
    },

    status: {
      type: String,
      enum: [
        "Saved",
        "Applied",
        "Screening",
        "Interview",
        "Selected",
        "Rejected"
      ],
      default: "Saved"
    },

    applicationDate: {
      type: Date
    },

    jobUrl: {
      type: String,
      trim: true
    },

    notes: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Application", applicationSchema);