// Import necessary React modules and components
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';

// Import custom components
import Header from '../header';
import Navigation from '../navigation';

// Import global CSS file
import '/src/utilities/global.css';

// Import pages
import ProfilePage from '/src/pages/profile';
import HomePage from '/src/pages/home';

// Create a root for rendering the React application
const root = createRoot(document.getElementById('root'));

// Render the React application
root.render(
  // Use React.StrictMode for additional checks during development
  <React.StrictMode>
    {/* Set up the BrowserRouter for routing */}
    <Router>
      {/* Include the Header component at the top of the application */}
      <Header />

      {/* Create a main container for the content */}
      <div className="main-container">
        {/* Include the Navigation component for navigation links */}
        <Navigation />

        {/* Define routes using the Routes component */}
        <Routes>
          {/* Define a route for the home page */}
          <Route path="/home" element={<HomePage />} />

          {/* Define a route for the profile page with a dynamic parameter (id) */}
          <Route path="/profile/:id" element={<ProfilePage />} />

          {/* Define a default route that redirects to the home page */}
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
