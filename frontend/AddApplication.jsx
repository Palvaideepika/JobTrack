import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddApplication() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: "",
    jobTitle: "",
    location: "",
    jobType: "Full-time",
    status: "Saved",
    applicationDate: "",
    jobUrl: "",
    notes: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      "http://localhost:5000/api/applications",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Failed to add application");
      return;
    }

    alert("Application added successfully!");

    navigate("/dashboard");
  } catch (error) {
    alert("Unable to connect to the server.");
  }
};

  return (
    <div className="auth-page">
      <div className="auth-card application-card">
        <h1>Add Job Application</h1>

        <p className="auth-subtitle">
          Add a new job application to your JobTrack account.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="e.g. Full Stack Developer"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="e.g. Hyderabad"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Job Type</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Saved">Saved</option>
              <option value="Applied">Applied</option>
              <option value="Screening">Screening</option>
              <option value="Interview">Interview</option>
              <option value="Selected">Selected</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="form-group">
            <label>Application Date</label>
            <input
              type="date"
              name="applicationDate"
              value={formData.applicationDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Job URL</label>
            <input
              type="url"
              name="jobUrl"
              placeholder="https://example.com/job"
              value={formData.jobUrl}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Notes</label>
            <textarea
              name="notes"
              placeholder="Add any notes about this application..."
              value={formData.notes}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <button type="submit" className="auth-btn">
            Save Application
          </button>
        </form>

        <p className="auth-footer">
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            ← Back to Dashboard
          </button>
        </p>
      </div>
    </div>
  );
}

export default AddApplication;