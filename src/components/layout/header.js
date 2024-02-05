import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useAuth } from '/home/rguktongole/Desktop/ReactProjects/my-first-app/src/context/auth.js';
import { useCart } from '/home/rguktongole/Desktop/ReactProjects/my-first-app/src/CartContext.js';

import { toast } from 'react-hot-toast';

const Header = ({ onSearch }) => {
  const [auth, setAuth] = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const { cart } = useCart(); // Get the cart data
  const location = useLocation();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    });
    localStorage.removeItem('auth');
    toast.success('Logged Out successfully!');
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const performSearch = () => {
    onSearch(searchQuery);
  };

  // Conditionally disable the search bar based on the route
  const disableSearchBar = location.pathname !== '/';
  const headerStyle = {
    borderBottom: disableSearchBar ? 'none' : '1px solid #dee2e6',
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={headerStyle}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand" href="#">
              Kisan Kart
            </Link>

            {!disableSearchBar && (
              <div className="search-bar">
                <i className="bi bi-search"></i>
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search Products Here..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                <button className="search-btn" onClick={performSearch}>
                  Search
                </button>
              </div>
            )}

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link">
                  Category
                </NavLink>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link" href="#">
                      Register
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link" href="#">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink onClick={handleLogout} to="/" className="nav-link">
                      LogOut
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart ({cart.length}){/* Display the cart count */}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

