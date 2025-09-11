# Backend Documentation

This document provides an overview of the backend implementation and the current file structure.

## What Has Been Done So Far

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

### Controllers
- auth.controller.js - handles register/login and auth-related actions.
- customer.controller.js - CRUD operations for customers.
- lead.controller.js - CRUD operations and business logic for leads.

### API Routes
- Authentication routes (`/register`, `/login`).
- Customer routes (`/customers`, `/customers/:id`, etc.).
- Lead routes (`/leads`, `/leads/:id`, etc.).
- Input validation using express-validator.

### Middlewares
- `authMiddleware.js` - protects routes by verifying JWT and attaching user info.
- Add additional middlewares as needed (validation, error handling, logging).

### Configuration
- MongoDB database connection (`db/db.js`).
- Environment variables setup (.env).
- Express server configuration (app.js / server.js).
- Cookie parser middleware.

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
│   └── lead.controller.js
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
│   ├── customer.routes.js
│   └── lead.routes.js
└── services/
```

This structure organizes the backend into logical modules for better maintainability and scalability.

If you want, I can add brief examples for lead routes or add a short middleware usage guide.