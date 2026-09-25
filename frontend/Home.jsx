import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-page">

      <nav className="navbar">
        <div className="logo">JobTrack</div>

        <div className="nav-links">
          <a href="#features">Features</a>
<a href="#about">About</a>

<Link to="/login" className="login-btn">
  Login
</Link>

<Link to="/register" className="signup-btn">
  Get Started
</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Manage Your Job Search
            <span> Smarter.</span>
          </h1>

          <p>
            JobTrack helps you organize job applications, track interview
            progress, and manage your entire job search in one place.
          </p>

          <div className="hero-buttons">
  <Link to="/register" className="primary-btn">
    Get Started
  </Link>

  <a href="#features" className="secondary-btn">
    Learn More
  </a>
</div>
          </div>
      </section>

      <section id="features" className="features">
        <h2>Everything You Need to Track Your Job Search</h2>

        <div className="feature-container">

          <div className="feature-card">
            <h3>📋 Track Applications</h3>
            <p>
              Add and manage all your job applications with important details
              such as company, role, location, and application status.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Monitor Progress</h3>
            <p>
              Keep track of applications, interviews, selections, and
              rejections from a single dashboard.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔍 Search & Filter</h3>
            <p>
              Quickly find applications using search and status-based
              filtering.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;