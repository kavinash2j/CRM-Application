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

### API Route Files
- auth.routes.js: Handles authentication endpoints:
  - POST /register: Register a new user
  - POST /login: Login and receive JWT token
  - GET /profile: Get authenticated user profile (protected)
- customer.routes.js: Manages customer CRUD endpoints:
  - POST /new: Add a new customer (protected)
  - GET /profile: Get customer profile (protected)
  - PUT /:id: Update customer by ID (protected)
  - DELETE /:id: Delete customer by ID (protected)
- lead.routes.js: Manages lead CRUD endpoints and business logic:
  - POST /new: Add a new lead (protected)
  - GET /profile: Get lead profile (protected)
  - PUT /:id: Update lead by ID (protected)
  - DELETE /:id: Delete lead by ID (protected)

### Middlewares
- `authMiddleware.js` - protects routes by verifying JWT and attaching user info.
- Add additional middlewares as needed (validation, error handling, logging).

### Configuration
- MongoDB database connection (`db/db.js`).
- Environment variables setup (.env).
- Express server configuration (app.js / server.js).
- Cookie parser middleware.

### Express Server
- The Express server is initialized in server.js.
- Listens on the port defined in the environment variable PORT (default: 3000).
- On startup, connects to MongoDB using the connectToDb function from db/db.js.
- All middleware, routes, and configuration are loaded via app.js.

## Database Schemas & Field Types

### User Model
- name: String
- email: String (unique)
- password: String (hashed)
- role: String (default: 'user', options: 'user', 'admin')

### Customer Model
- name: String
- email: String
- phone: String
- company: String
- owner: ObjectId (ref: User)
- createdAt: Date
- updatedAt: Date

### Lead Model
- title: String
- description: String
- status: String (options: 'New', 'Contacted', 'Converted', 'Lost')
- value: Number
- customer: ObjectId (ref: Customer)
- createdAt: Date
- updatedAt: Date

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

### Packages Used in Each Module

#### Authentication
- bcrypt: Hashes and compares user passwords securely.
- jsonwebtoken: Generates and verifies JWT tokens for user sessions.
- express-validator: Validates registration and login input data.
- cookie-parser: Parses JWT tokens from cookies for authentication.

#### Database Models
- mongoose: Defines schemas and interacts with MongoDB for User, Customer, and Lead models.

#### Controllers
- mongoose: Used for database queries and updates in controller logic.
- bcrypt: Used in auth.controller.js for password hashing/comparison.
- jsonwebtoken: Used in auth.controller.js for token generation.
- express-validator: Used for request validation in controllers.

#### Routes
- express: Defines API endpoints and routing logic.
- express-validator: Validates request data in route definitions.
- cookie-parser: Parses cookies for authentication routes.

#### Middlewares
- jsonwebtoken: Verifies JWT tokens in authMiddleware.js.
- cookie-parser: Reads JWT tokens from cookies in middleware.

#### Configuration
- dotenv: Loads environment variables for database and server config.
- mongoose: Connects to MongoDB in db/db.js.
- cors: Enables cross-origin requests in server/app config.