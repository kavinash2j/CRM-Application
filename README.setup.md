# Quick Setup — 5 Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/kavinash2j/CRM-Application.git
   cd CRM-Application
   ```

2. Install dependencies:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Create .env files (examples):
   - backend/.env
     ```env
     PORT=3000                    # Choose your preferred port number
     MONGO_URL=                   # Add your MongoDB connection URL (local or Atlas)
     JWT_SECRET=                  # Add any secure string as your JWT secret
     ```
   - frontend/.env
     ```env
     VITE_BACKEND_URL=           # Add your backend URL (e.g., http://localhost:3000)
     ```

4. Start the servers:
   - Backend:
     ```bash
     cd backend
     npm start
     ```
   - Frontend:
     ```bash
     cd frontend
     npm run dev
     ```

5. Verify
   - Open the frontend URL shown in the terminal (Vite default: http://localhost:5173) and confirm the app loads and API requests reach http://localhost:3000.
   - Test backend health endpoint: visit http://localhost:3000/test (or http://localhost:{PORT}/test if you changed PORT) to confirm the backend is responding.