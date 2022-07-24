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
import Provider from './context/Provider';
import Auth from './hooks/Auth';

function App() {
  return (
    <BrowserRouter className="App">
      <Provider>
        <Routes>
          <Route path="/" element={<Screen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/auth" element={<Auth />}>
            <Route path="/auth/explore" element={<Explore />} />
            <Route path="/auth/home" element={<Home />} />
            <Route path="/auth/depositandwithdrawal" element={<DepositAndWithdrawal />} />
            <Route path="/auth/buyandsell" element={<BuyAndSell />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
