import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/login/Login';
import { UserStorage } from './UserContext';
import './App.css';
import User from './components/user/User';
import ProtectedRoute from './components/helper/ProtectedRoute';
function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path='/login/*' element={<Login />} />
          <Route path='/home' exact element={<Home />} />
          <ProtectedRoute path='/conta/*' element={<User />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
