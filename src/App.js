import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Explore from './pages/Explore';
import BuyAndSell from './pages/BuyAndSell';
import DepositAndWithdrawal from './pages/DepositAndWithdrawal';
import Screen from './pages/Screen';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Screen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/home" element={<Home />} />
        <Route path="/deposit-and-withdrawal" element={<DepositAndWithdrawal />} />
        <Route path="/buy-and-sell" element={<BuyAndSell />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
