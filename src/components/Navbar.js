import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  let location = useLocation();
let navigate= useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }
  return (
    <React.Fragment>
      <div>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''} navbar-brand`} to="/">iNotebook</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                  </li>
                </ul>
                {!localStorage.getItem('token')?<form className="d-flex">
                  <Link className="btn btn-outline-success bg-success mx-1 text-white" to="/login" role="button">Login</Link>
                  <Link className="btn btn-outline-success bg-success mx-1 text-white" to="/signup" role="button">Signup</Link>
                </form>:<Link className="btn btn-outline-success bg-success mx-1 text-white" onClick={handleLogout} to="/login" role="button">LogOut</Link> }
              </div>
            </div>
          </nav>

        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
