import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="top-left"
        autoClose={2500}
      theme='dark'/>
  </React.StrictMode>
);


reportWebVitals();
