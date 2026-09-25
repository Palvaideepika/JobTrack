# JobTrack Backend

The JobTrack backend provides the server-side API for the JobTrack job application tracking system.

It handles user authentication, job application management, database operations, and communication between the frontend and MongoDB database.

## 🚀 Features

- User registration
- User login
- JWT-based authentication
- Secure password handling
- Add job applications
- View job applications
- Update application details
- Delete job applications
- Search and filter job applications
- MongoDB database integration
- REST API architecture

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- Nodemon

## 📁 Backend Structure

```text
backend/
├── server.js
├── package.json
├── package-lock.json
├── routes/
├── models/
├── middleware/
├── controllers/
├── .gitignore
└── README.md
⚙️ Installation

Clone the repository and open the backend folder:

cd backend

Install the required dependencies:

npm install
🔐 Environment Variables

Create a .env file inside the backend folder.

Example:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Do not upload the .env file to GitHub.

Add .env to .gitignore:

.env
node_modules/
▶️ Run the Backend

Start the development server using:

npm run dev

The backend will run at:

http://localhost:5000
🔗 API

The backend provides APIs for:

Authentication
POST /api/auth/register
POST /api/auth/login
Job Applications

The application APIs support operations such as:

GET
POST
PUT
DELETE

for managing job applications.

🗄️ Database

JobTrack uses MongoDB to store:

User information
Job application information
Application status
Company and role details
Other application-related data
🔒 Security

Authentication is handled using JWT tokens.

Sensitive configuration values such as:

MongoDB credentials
JWT secrets

are stored in environment variables and should not be committed to GitHub.
