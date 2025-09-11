# Frontend Documentation

Summary of work done so far

- Implemented a React frontend using Vite.
- Created pages for Home, Login, and Signup plus CRUD pages for Customers and Leads.
- Built reusable UI components (Sidebar, Topbar, lists, forms, modals).
- Implemented client-side routing with react-router-dom.
- Added a user protection wrapper for authenticated routes.
- Added a Context API file for shared data and a simple Redux setup for global state.

Routing (what route loads which file)

- / -> src/Pages/Home.jsx
- /login -> src/Pages/Login.jsx
- /signup -> src/Pages/Signup.jsx
- /customers -> src/Pages/Customers.jsx
- /customers/:id -> src/Pages/CustomerDeatils.jsx
- /leads -> src/Pages/Leads.jsx
- /leads/:id -> src/Pages/LeadsDetails.jsx

Important components and where they are used

- src/components/Sidebar.jsx - main navigation sidebar (used in Dashboard layout)
- src/components/Topbar.jsx - top navigation / user actions
- src/components/ListCustomers.jsx - customers list view
- src/components/ListLead.jsx - leads list view
- src/components/AddCustomer.jsx, AddLead.jsx - forms to add items
- src/components/EditCustomer.jsx, EditLead.jsx - edit forms
- src/components/AddNewModal.jsx - modal used for creating new items
- src/components/CustomerPage.jsx, LeadPage.jsx, Dashboard.jsx - page-level components used by route pages

Wrapper / Protection

- wrapComponents/userProtected.jsx - HOC/Wrapper that protects routes which require authentication. Use it to wrap pages/routes that need auth.

State management

- Context: src/Context/DataContext.jsx for sharing data using React Context API.
- Redux: src/Redux/DataRedux.js contains reducers/actions and src/Redux/store.js sets up the Redux store. Use Redux for centralized state that needs to be accessed by many components.

Project structure (overview)

```
frontend/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   ├── AddCustomer.jsx
│   │   ├── AddLead.jsx
│   │   ├── AddNewModal.jsx
│   │   ├── CustomerPage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── EditCustomer.jsx
│   │   ├── EditLead.jsx
│   │   ├── LeadPage.jsx
│   │   ├── ListCustomers.jsx
│   │   ├── ListLead.jsx
│   │   ├── Sidebar.jsx
│   │   └── Topbar.jsx
│   ├── Context/
│   │   └── DataContext.jsx
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Customers.jsx
│   │   ├── CustomerDeatils.jsx
│   │   ├── Leads.jsx
│   │   └── LeadsDetails.jsx
│   ├── Redux/
│   │   ├── DataRedux.js
│   │   └── store.js
│   └── wrapComponents/
│       └── userProtected.jsx
└── public/
```

Notes

- App.jsx already sets up routes for Home, Login, and Signup. Add any protected routes inside a wrapper or use the userProtected component.
- Keep form and list components modular so pages can compose them easily.

If you want, I can also add small usage examples for the userProtected wrapper or show how to connect a component to Redux or Context.