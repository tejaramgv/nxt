// // 	// import logo from './logo.svg';
// import './App.css';
// // import React,{useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// // import 'bootstrap/dist/js/bootstrap.bundle';
// import 'font-awesome/css/font-awesome.css';
// import Layout from './components/layout/layout.js';
// import {Routes,Route} from "react-router-dom";
// import HomePage from "./pages/HomePage.js"
// import About from "./pages/About.js"
// import Contact from "./pages/Contact.js"
// import Policy from "./pages/Policy.js"
// import PageNotFound from "./pages/PageNotFound.js"
// import Register from './pages/Auth/Register.js';
// import Login from './pages/Auth/login.js';
// import PrivateRoute from "./components/Routes/Private.js";
// import Dashboard from '../src/dashboard.js';
// // import {ToastContainer} from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';


// function App(){
//   return(
//     <>
//     <Routes>
//       <Route path="/" element={<HomePage/>}/>
//       <Route path="/Register" element={<Register/>}/>
//       <Route path="/Dashboard" element={<PrivateRoute/>}>
//           <Route path="" element={<Dashboard/>}/>
//     </Route>

//       <Route path="/Login" element={<Login/>}/>
//       <Route path="/About" element={<About/>}/>
//       <Route path="/contact" element={<Contact/>}/>
//       <Route path="/policy" element={<Policy/>}/>
//       <Route path="/*" element={<PageNotFound/>}/>
//     </Routes>

//     </>
//   )
// }
// export default App;






// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/HomePage.js';
// import Register from './pages/Auth/Register.js';
// import Login from './pages/Auth/login.js';
// import Cart from './Cart.js';
// import Category from "./Category.js";
// import Layout from './components/layout/layout.js';
// import { AuthProvider } from './context/auth.js';
// import { CartProvider } from './CartContext.js';

// function App() {
//   return (
//     <AuthProvider>
//       <CartProvider>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/category" element={<Category />} />
//           </Routes>
      
//       </CartProvider>
//     </AuthProvider>
//   );
// }

// export default App;
// // App.js
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/HomePage.js';
// import Register from './pages/Auth/Register.js';
// import Login from './pages/Auth/login.js';
// import Cart from './Cart.js';
// import Category from "./Category.js";
// import Layout from './components/layout/layout.js';
// import Header from './components/layout/header.js'; // Import the Header component
// import { AuthProvider } from './context/auth.js';
// import { CartProvider } from './CartContext.js';

// function App() {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 {/* Pass handleHeaderSearch function to the Header */}
//                 <Header onSearch={handleHeaderSearch} />
//                 <Home />
//               </>
//             }
//           />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/category" element={<Category />} />
//         </Routes>
//       </CartProvider>
//     </AuthProvider>
//   );
// }

// export default App;

// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage.js';
import Register from './pages/Auth/Register.js';
import Login from './pages/Auth/login.js';
import About from"./pages/About.js";
import Contact from"./pages/Contact.js";
import Policy from"./pages/Policy.js";
import Cart from './Cart.js';
import Category from "./Category.js";
import Layout from './components/layout/layout.js';
import Header from './components/layout/header.js'; // Import the Header component
import { AuthProvider } from './context/auth.js';
import { CartProvider } from './CartContext.js';

function App() {
  // Define handleHeaderSearch function
  const handleHeaderSearch = (query) => {
    // Add logic to handle the search term, e.g., update state, fetch data, etc.
    console.log('Search term:', query);
  };

  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Pass handleHeaderSearch function to the Header */}
                <Header onSearch={handleHeaderSearch} />
                <Home />
              </>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category" element={<Category />} />
           <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
             <Route path="/policy" element={<Policy/>} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
