// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import EnquiryList from './components/EnquiryList';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = (token) => {
    setIsAuthenticated(true);
    setToken(token);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/enquiries"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <EnquiryList onLogout={handleLogout} token={token} />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/enquiries" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;