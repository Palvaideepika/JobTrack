# JobTrack – Job Application Tracking System

JobTrack is a full-stack web application designed to help users organize and manage their job applications in one place.

The application allows users to create an account, log in securely, add job applications, track application status, search and filter applications, and manage their job search progress through a dashboard.

---

## 🚀 Project Overview

Searching for jobs often involves managing applications across different companies, roles, locations, and application stages.

JobTrack provides a centralized platform where users can maintain their job application information and monitor their progress.

### Main Application Flow

```text
Landing Page
      ↓
User Registration
      ↓
User Login
      ↓
Dashboard
      ↓
Add Job Application
      ↓
View Applications
      ↓
Search & Filter
      ↓
Update Application
      ↓
Delete Application
✨ Features
🔐 User Authentication
User registration
User login
Password authentication
JWT-based authentication
Protected user session
Logout functionality
📋 Job Application Management

Users can:

Add job applications
View saved applications
Update application details
Delete applications
Track application status
🔍 Search and Filter

Users can:

Search for specific companies or roles
Filter applications based on status
Quickly find relevant applications
📊 Dashboard

The dashboard provides a central place to manage job applications and monitor the job search process.

🛠️ Technologies Used
Frontend
React.js
JavaScript
HTML5
CSS3
React Router
Vite
Fetch API
Backend
Node.js
Express.js
MongoDB
Mongoose
JSON Web Token (JWT)
bcrypt
Nodemon
Database
MongoDB
📁 Project Structure
JobTrack/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── .gitignore
│   └── README.md
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
└── README.md

The exact backend and frontend folder structure may vary depending on the implementation.

⚙️ Installation and Setup
1. Clone the Repository
git clone YOUR_GITHUB_REPOSITORY_URL

Move into the project:

cd JobTrack
2. Frontend Setup

Open a terminal and run:

cd frontend

Install dependencies:

npm install

Start the frontend:

npm run dev

The frontend normally runs at:

http://localhost:5173
3. Backend Setup

Open another terminal:

cd backend

Install dependencies:

npm install

Create a .env file inside the backend folder.

Example:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the backend:

npm run dev

The backend runs at:

http://localhost:5000
🔐 Environment Variables

The backend uses environment variables for sensitive configuration.

Example:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Important Security Rule

Do not upload .env files to GitHub.

Add the following to .gitignore:

.env
.env.*
node_modules/

Never expose:

MongoDB username
MongoDB password
JWT secret
API keys
Other private credentials
🔗 Application Architecture
             JobTrack
                 │
        ┌────────┴────────┐
        │                 │
    Frontend            Backend
    React.js           Node.js
        │                 │
        │      REST API   │
        └────────►────────┘
                          │
                          ▼
                      MongoDB

The frontend communicates with the backend through REST APIs.

The backend handles authentication, application management, and database operations.

MongoDB stores user and job application information.

🔑 Authentication Flow
User
  ↓
Register
  ↓
Backend
  ↓
MongoDB
  ↓
Account Created
  ↓
Login
  ↓
JWT Token
  ↓
Dashboard

After successful authentication, the application stores the authentication token and user information in the browser.

📋 Job Application Flow

A user can create a job application containing information such as:

Company
Job role
Location
Application status
Other relevant application details

The application is sent to the backend and stored in MongoDB.

Users can later:

Create
  ↓
Read
  ↓
Update
  ↓
Delete

their job applications.

🧪 Testing Completed

The following features were tested successfully:

 Frontend starts successfully
 Backend starts successfully
 MongoDB connection
 User registration
 User login
 Dashboard navigation
 Add application
 View applications
 Search applications
 Filter applications
 Update application
 Delete application
 Logout
🌐 Local URLs
Frontend
http://localhost:5173
Backend
http://localhost:5000
📸 Screenshots

Screenshots can be added to this section to demonstrate the application interface.

Recommended screenshots:

Landing Page
Registration Page
Login Page
Dashboard
Add Application
Application List
Search/Filter
Update Application

Example:

![JobTrack Dashboard](screenshots/dashboard.png)
🎯 Project Objectives

The main objectives of JobTrack are:

Create a centralized job application tracker
Simplify job search management
Provide secure user authentication
Store application data in a database
Provide search and filtering functionality
Practice full-stack web development
Build a practical real-world application
📚 Skills Demonstrated

This project demonstrates experience with:

Frontend development
Backend development
REST API integration
Database management
Authentication
CRUD operations
React development
Node.js and Express.js
MongoDB
JavaScript
GitHub project management
Debugging and testing
🔮 Future Improvements

Possible future enhancements include:

Email notifications
Interview reminders
Application deadlines
Resume management
Job description storage
Application statistics
Charts and analytics
Dark mode
Cloud deployment
Automated reminders
Job search API integration
👩‍💻 Author

Deepika Palvai

JobTrack – Full Stack Job Application Tracking System

⭐ Conclusion

JobTrack is a full-stack job application tracking system that combines a React frontend, Node.js/Express backend, and MongoDB database.

The project demonstrates how frontend, backend, authentication, database operations, and CRUD functionality can be integrated into a practical real-world web application.


### Your GitHub should now have

```text
JobTrack
│
├── README.md              ← THIS full-task README
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── README.md
│
└── backend/
    ├── server.js
    ├── package.json
    └── README.md
