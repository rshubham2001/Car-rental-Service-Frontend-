import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './constant/routes';
import Home from './components/home/Home';
import LoginForm from './components/auth/LoginForm';
import RegistrationForm from './components/auth/RegistrationForm';
import Customer from './components/customer/Customer';
import CarBooing from './components/booking/CarBooking';




function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={routes.HOME} element={<Home/>} />
        <Route path={ routes.LOGIN} element={<LoginForm/>} />
        <Route path={routes.REGISTER} element={<RegistrationForm />} />
        <Route path={routes.PROFILE} element={<Customer />} />
        <Route path={routes.BOOKING} element={<CarBooing />} />
      </Routes>
    </Router>
  );
}

export default App;
