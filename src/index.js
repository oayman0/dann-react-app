import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/fontawesome.css';
import './assets/css/animate.min.css';
import '../src/assets/css/placeholder-loading.min.css';
import './assets/css/custom.css';
import axios from 'axios'  

axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('token')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //check
  // <React.StrictMode>
  
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
