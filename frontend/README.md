# Frontend Documentation

Summary of work done so far

- Implemented a React frontend using Vite.
- Created pages for Home, Login, and Signup plus CRUD pages for Customers and Leads.
- Built reusable UI components (Sidebar, Topbar, lists, forms, modals).
- Implemented client-side routing with react-router-dom.
- Added a user protection wrapper for authenticated routes.
- Added a Context API file for shared data and a simple Redux setup for global state.

## Routing (which route loads which file)

| Route                | Page File                        | Protected?        |
|----------------------|----------------------------------|-------------------|
| /                    | src/Pages/Home.jsx (redirects to /dashboard) | Yes (via /dashboard) |
| /login               | src/Pages/Login.jsx              | No                |
| /signup              | src/Pages/Signup.jsx             | No                |
| /dashboard           | src/Pages/Home.jsx               | Yes               |
| /leads               | src/Pages/Leads.jsx              | Yes               |
| /leads/:_id          | src/Pages/LeadsDetails.jsx       | Yes               |
| /customers           | src/Pages/Customers.jsx          | Yes               |
| /customer/:_id       | src/Pages/CustomerDeatils.jsx    | Yes               |

All routes except /login and /signup are protected using the UserProtected wrapper.

Important components and where they are used

- src/components/Sidebar.jsx - main navigation sidebar (used in Dashboard layout)
- src/components/Topbar.jsx - top navigation / user actions
- src/components/ListCustomers.jsx - customers list view
- src/components/ListLead.jsx - leads list view
- src/components/AddCustomer.jsx, AddLead.jsx - forms to add items
- src/components/EditCustomer.jsx, EditLead.jsx - edit forms
- src/components/AddNewModal.jsx - modal used for creating new items
- src/components/CustomerPage.jsx, LeadPage.jsx, Dashboard.jsx - page-level components used by route pages

## Components Overview

- **AddCustomer.jsx**: Form for adding a new customer.
- **AddLead.jsx**: Form for adding a new lead.
- **AddNewModal.jsx**: Modal dialog for creating new items (customers or leads).
- **CustomerPage.jsx**: Displays details and actions for a single customer.
- **Dashboard.jsx**: Main dashboard layout, aggregates key stats and navigation.
- **EditCustomer.jsx**: Form for editing an existing customer.
- **EditLead.jsx**: Form for editing an existing lead.
- **LeadPage.jsx**: Displays details and actions for a single lead.
- **ListCustomers.jsx**: Table or list view of all customers.
- **ListLead.jsx**: Table or list view of all leads.
- **SearchModel.jsx**: Search/filter modal for customers or leads.
- **Sidebar.jsx**: Main navigation sidebar for the app.
- **Topbar.jsx**: Top navigation bar, user actions, and notifications.

## Wrapper / Protection

- **wrapComponents/userProtected.jsx**: This is a higher-order component (HOC) that protects routes which require authentication. It checks if the user is authenticated before allowing access to the wrapped page. If the user is not authenticated, it redirects to the login page. Use it to wrap any route or page that should only be accessible to logged-in users.

Example usage:

```jsx
<Route path="/dashboard" element={
  <UserProtected>
    <Home />
  </UserProtected>
} />
```

State management

- Context: src/Context/DataContext.jsx for sharing data using React Context API.
- Redux: src/Redux/DataRedux.js contains reducers/actions and src/Redux/store.js sets up the Redux store. Use Redux for centralized state that needs to be accessed by many components.

## Why Use Context?

The Context API is used to share data and state across multiple components without prop drilling. It helps manage global data (such as user info, theme, or app settings) and makes it easier for deeply nested components to access and update shared state. In this project, `src/Context/DataContext.jsx` provides a centralized place for such shared data, improving code organization and maintainability.

## Why Use Redux?

Redux is used for managing global state that needs to be accessed and updated by many components across the application. It provides a predictable state container, making it easier to handle complex state logic, asynchronous actions (such as API calls), and data consistency. In this project, Redux is set up in `src/Redux/store.js` and reducers/actions are defined in `src/Redux/DataRedux.js`, with thunks for async operations in `src/Redux/customerThunks.js` and `src/Redux/leadThunks.js`. This helps keep your state management organized and scalable as your app grows.

## Tech Stack Used

- React (with Vite for fast development)
- React Router DOM (client-side routing)
- Context API (global state sharing)
- Redux (centralized state management)
- JavaScript (ES6+)
- CSS - tailwindcss

## Bonus Features Implemented

- Protected routes using a custom UserProtected wrapper
- Modular and reusable UI components (Sidebar, Topbar, modals, forms)
- Context API and Redux for flexible state management
- Async thunks for API calls and side effects
- Search/filter modal for customers and leads
- Redirect from root (/) to dashboard for authenticated experience
- Organized project structure for scalability

## Features

- User authentication (login, signup)
- Protected routes for authenticated users
- Dashboard page with key stats and navigation
- CRUD operations for Customers and Leads
- List, add, edit, and view details for customers
- List, add, edit, and view details for leads
- Search and filter functionality for customers and leads
- Reusable UI components (Sidebar, Topbar, modals, forms)
- Context API for shared state management
- Redux for global state management and async actions
- Responsive design with Tailwind CSS
- Redirect from root (/) to dashboard for authenticated experience
- Organized and scalable project structure

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

## Packages & Usage
- react: Core library for building user interfaces.
- react-dom: Renders React components to the DOM.
- react-router-dom: Handles client-side routing and navigation between pages.
- axios: Makes HTTP requests to the backend API for data fetching and submission.
- @reduxjs/toolkit: Simplifies Redux state management and setup.
- react-redux: Connects React components to the Redux store for global state access.
- tailwindcss: Utility-first CSS framework for rapid UI styling and responsive design.
- @tailwindcss/vite: Integrates Tailwind CSS with Vite for fast development.
- framer-motion: Adds animations and transitions to UI components.
- lucide-react: Provides icon components for UI design.
- react-icons: Additional icon library for UI components.
- react-slick & slick-carousel: Implements carousels/sliders in the UI.
- swiper: Advanced slider/carousel functionality for lists and galleries.
- recharts: Data visualization library for charts and graphs in the dashboard.

Notes

- App.jsx already sets up routes for Home, Login, and Signup. Add any protected routes inside a wrapper or use the userProtected component.
- Keep form and list components modular so pages can compose them easily.

If you want, I can also add small usage examples for the userProtected wrapper or show how to connect a component to Redux or Context.