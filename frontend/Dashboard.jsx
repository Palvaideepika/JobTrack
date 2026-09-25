import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [jobTypeFilter, setJobTypeFilter] = useState("All");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    fetchApplications();
  }, []);

  useEffect(() => {
    let filtered = applications;

    if (search.trim() !== "") {
      const searchText = search.toLowerCase();

      filtered = filtered.filter(
        (application) =>
          application.company
            ?.toLowerCase()
            .includes(searchText) ||
          application.jobTitle
            ?.toLowerCase()
            .includes(searchText)
      );
    }

    if (statusFilter !== "All") {
      filtered = filtered.filter(
        (application) =>
          application.status === statusFilter
      );
    }

    if (jobTypeFilter !== "All") {
      filtered = filtered.filter(
        (application) =>
          application.jobType === jobTypeFilter
      );
    }

    setFilteredApplications(filtered);
  }, [
    applications,
    search,
    statusFilter,
    jobTypeFilter
  ]);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/applications",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message);
        return;
      }

      setApplications(data);
    } catch (error) {
      console.error(
        "Failed to fetch applications:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:5000/api/applications/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(
          data.message ||
            "Failed to delete application"
        );
        return;
      }

      alert("Application deleted successfully!");

      fetchApplications();
    } catch (error) {
      alert("Unable to connect to the server.");
    }
  };

  const totalApplications = applications.length;

  const applied = applications.filter(
    (app) => app.status === "Applied"
  ).length;

  const screening = applications.filter(
    (app) => app.status === "Screening"
  ).length;

  const interviews = applications.filter(
    (app) => app.status === "Interview"
  ).length;

  const selected = applications.filter(
    (app) => app.status === "Selected"
  ).length;

  const rejected = applications.filter(
    (app) => app.status === "Rejected"
  ).length;

  return (
    <div className="dashboard-page">

      <div className="dashboard-header">

        <div>
          <h1>JobTrack Dashboard</h1>

          <p>
            Welcome back, {user?.name || "User"}!
          </p>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      <div className="stats-container">

        <div className="stat-card">
          <h3>Total Applications</h3>
          <p>{totalApplications}</p>
        </div>

        <div className="stat-card">
          <h3>Applied</h3>
          <p>{applied}</p>
        </div>

        <div className="stat-card">
          <h3>Screening</h3>
          <p>{screening}</p>
        </div>

        <div className="stat-card">
          <h3>Interviews</h3>
          <p>{interviews}</p>
        </div>

        <div className="stat-card">
          <h3>Selected</h3>
          <p>{selected}</p>
        </div>

        <div className="stat-card">
          <h3>Rejected</h3>
          <p>{rejected}</p>
        </div>

      </div>

      <div className="dashboard-content">

        <div className="applications-section">

          <div className="section-header">

            <h2>My Job Applications</h2>

            <button
              className="add-btn"
              onClick={() =>
                navigate("/add-application")
              }
            >
              + Add Application
            </button>

          </div>

          <div className="filters-container">

            <input
              type="text"
              className="search-input"
              placeholder="Search company or job title..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            <select
              className="filter-select"
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
            >
              <option value="All">
                All Statuses
              </option>

              <option value="Saved">
                Saved
              </option>

              <option value="Applied">
                Applied
              </option>

              <option value="Screening">
                Screening
              </option>

              <option value="Interview">
                Interview
              </option>

              <option value="Selected">
                Selected
              </option>

              <option value="Rejected">
                Rejected
              </option>
            </select>

            <select
              className="filter-select"
              value={jobTypeFilter}
              onChange={(e) =>
                setJobTypeFilter(e.target.value)
              }
            >
              <option value="All">
                All Job Types
              </option>

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

          {loading ? (

            <div className="empty-state">
              <h3>Loading applications...</h3>
            </div>

          ) : filteredApplications.length === 0 ? (

            <div className="empty-state">

              <h3>
                No applications found
              </h3>

              <p>
                Try changing your search or
                filter options.
              </p>

            </div>

          ) : (

            <div className="applications-list">

              {filteredApplications.map(
                (application) => (

                  <div
                    className="application-card"
                    key={application._id}
                  >

                    <h3>
                      {application.jobTitle}
                    </h3>

                    <p>
                      <strong>Company:</strong>{" "}
                      {application.company}
                    </p>

                    <p>
                      <strong>Location:</strong>{" "}
                      {application.location ||
                        "Not specified"}
                    </p>

                    <p>
                      <strong>Job Type:</strong>{" "}
                      {application.jobType}
                    </p>

                    <p>
                      <strong>Status:</strong>{" "}
                      {application.status}
                    </p>

                    {application.applicationDate && (
                      <p>
                        <strong>Applied:</strong>{" "}
                        {new Date(
                          application.applicationDate
                        ).toLocaleDateString()}
                      </p>
                    )}

                    <div className="application-actions">

                      <button
                        className="edit-btn"
                        onClick={() =>
                          navigate(
                            `/edit-application/${application._id}`
                          )
                        }
                      >
                        ✏️ Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(
                            application._id
                          )
                        }
                      >
                        🗑️ Delete
                      </button>

                    </div>

                  </div>

                )
              )}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;