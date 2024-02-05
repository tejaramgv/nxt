import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter } from 'react-router-dom';
import {AuthProvider} from "./context/auth.js"
import Practice from './Practice.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthProvider>
    // <Practice/>

  
);


reportWebVitals();
