import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditApplication() {
  const { id } = useParams();
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplication();
  }, []);

  const fetchApplication = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/applications",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to load application");
        navigate("/dashboard");
        return;
      }

      const application = data.find(
        (item) => item._id === id
      );

      if (!application) {
        alert("Application not found");
        navigate("/dashboard");
        return;
      }

      setFormData({
        company: application.company || "",
        jobTitle: application.jobTitle || "",
        location: application.location || "",
        jobType: application.jobType || "Full-time",
        status: application.status || "Saved",
        applicationDate: application.applicationDate
          ? application.applicationDate.split("T")[0]
          : "",
        jobUrl: application.jobUrl || "",
        notes: application.notes || ""
      });

    } catch (error) {
      alert("Unable to connect to the server.");
      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  };

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
        `http://localhost:5000/api/applications/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(
          data.message || "Failed to update application"
        );
        return;
      }

      alert("Application updated successfully!");

      navigate("/dashboard");

    } catch (error) {
      alert("Unable to connect to the server.");
    }
  };

  if (loading) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <h2>Loading application...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card application-card">

        <h1>Edit Job Application</h1>

        <p className="auth-subtitle">
          Update your job application details.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Company Name</label>

            <input
              type="text"
              name="company"
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
              <option value="Full-time">
                Full-time
              </option>

              <option value="Part-time">
                Part-time
              </option>

              <option value="Internship">
                Internship
              </option>

              <option value="Contract">
                Contract
              </option>

              <option value="Other">
                Other
              </option>
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
              value={formData.jobUrl}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Notes</label>

            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="auth-btn"
          >
            Update Application
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

export default EditApplication;