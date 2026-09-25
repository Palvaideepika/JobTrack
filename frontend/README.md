# JobTrack Frontend

The JobTrack frontend is a responsive React-based web application that provides an easy-to-use interface for managing and tracking job applications.

It communicates with the JobTrack backend through REST APIs and allows users to manage their complete job search journey from one place.

## 🚀 Features

- User registration
- User login
- Dashboard
- Add job applications
- View job applications
- Update application details
- Delete applications
- Search applications
- Filter applications by status
- Track application progress
- Responsive user interface
- JWT-based authentication

## 🛠️ Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- React Router
- Vite
- Fetch API

## 📁 Frontend Structure

```text
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.md
⚙️ Installation

Open the frontend directory:

cd frontend

Install the required dependencies:

npm install
▶️ Run the Frontend

Start the development server:

npm run dev

The application will normally be available at:

http://localhost:5173
🔗 Backend Connection

The frontend communicates with the JobTrack backend using REST APIs.

Backend development server:

http://localhost:5000

The frontend uses the backend for:

User registration
User authentication
Job application management
Application updates
Application deletion
Search and filtering data
🔐 Authentication

After successful login, the authentication token is stored in the browser's local storage.

The application uses the authenticated user information to provide access to the JobTrack dashboard and job application features.

📊 Main Application Flow
Landing Page
     ↓
Register
     ↓
Login
     ↓
Dashboard
     ↓
Add Application
     ↓
View Applications
     ↓
Search / Filter
     ↓
Update / Delete
🎨 User Interface

The frontend provides pages for:

Landing Page

Introduces JobTrack and its main features.

Registration

Allows new users to create an account.

Login

Allows existing users to securely log in.

Dashboard

Provides access to job application tracking features.

Applications

Allows users to:

Add applications
View applications
Search applications
Filter applications
Update application information
Delete applications
📱 Responsive Design

The frontend is designed to provide a user-friendly experience across different screen sizes, including desktop and mobile devices.

🔒 Security

Sensitive information such as database credentials and JWT secrets should never be stored directly in frontend source code or committed to GitHub.

Environment files containing secrets should be excluded using .gitignore.

🧪 Testing

The following features have been tested:

Registration
Login
Dashboard navigation
Adding applications
Viewing applications
Searching applications
Filtering applications
Updating applications
Deleting applications
