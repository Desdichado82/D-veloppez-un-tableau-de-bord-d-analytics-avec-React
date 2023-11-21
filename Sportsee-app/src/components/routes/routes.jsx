import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Header from '../header';
import Navigation from'../navigation';
import '/src/utilities/global.css'; // Import the global CSS file
import ProfilePage from '/src/pages/profile';
import HomePage from '/src/pages/home';




const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header />
    <div className="main-container">
    <Navigation/>
      <Routes>
        <Route path="/" element={<Outlet/>}>
        <Route path ="/profile/:id"  element={<ProfilePage />} />
        <Route path="/home" element={<HomePage />} />
        route
        </Route>
      </Routes>
    </div>
     
    </Router>
  </React.StrictMode>,
)