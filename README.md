# Authentication w/ JWT

This project is a simple full-stack web application that implements user authentication using JSON Web Tokens (JWT). It allows users to sign up, log in, and access a private page that is only available to authenticated users. The app demonstrates secure password handling, token-based authentication, and basic React routing and state management.

This project provides a solid foundation for understanding and building modern authentication flows using JWTs and React with a Flask backend.

## Tech Stack

- **Backend:** Python, Flask, Flask-JWT-Extended, SQLAlchemy, PostgreSQL (or SQLite fallback), Werkzeug for password hashing  
- **Frontend:** React, React Router, Bootstrap for styling  
- **Authentication:** JWT for secure token-based authentication  

## Features

- User registration with email and password (including password confirmation on signup)  
- Secure password hashing and storage  
- User login returning a JWT token  
- Protected private route accessible only with a valid JWT  
- Frontend pages for signup, login, and a private area showing confirmed login  
- Navbar dynamically changes based on authentication state (shows login/signup or logout button)  
- Client-side form validation and user-friendly error/info messages  
- Session storage of JWT token for maintaining login state across pages  
