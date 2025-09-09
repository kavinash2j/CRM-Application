# Backend Documentation

This document provides an overview of the backend implementation and the current file structure.

## What Has Been Done So Far

## Backend File Structure

```
backend/
├── .env
├── app.js
├── package.json
├── README.md
├── server.js
├── controllers/
│   ├── auth.controller.js
│   ├── customer.controller.js
├── db/
│   └── db.js
├── middlewares/
│   └── authMiddleware.js
├── models/
│   ├── customer.models.js
│   ├── lead.models.js
│   └── User.models.js
├── routes/
│   ├── auth.routes.js
│   └── customer.routes.js
└── services/
```


### Authentication
- User registration with validation.
- User login with JWT token generation.
- Password hashing using bcrypt.
- JWT token-based authentication.

### Database Models
- **User Model**
  - Fields: Name, email, password, role (user/admin).
  - Password hashing and comparison methods.
  - JWT token generation.

- **Customer Model**
  - Fields: Name, email, phone, company.
  - Linked to owner (User).
  - Timestamp tracking.

- **Lead Model**
  - Fields: Title, description, status tracking, lead value tracking.
  - Connected to customers.
  - Status options: New, Contacted, Converted, Lost.

### API Routes
- Authentication routes (`/register`, `/login`).
- Input validation using express-validator.

### Configuration
- MongoDB database connection.
- Environment variables setup.
- Express server configuration.
- Cookie parser middleware.


This structure organizes the backend into logical modules for better maintainability and scalability.