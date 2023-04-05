import React from 'react';
import { Link,useLocation } from "react-router-dom";
const Navbar = () => {
    let location= useLocation();
  return (
    <React.Fragment>
    <div>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container-fluid">
    <Link className={`nav-link ${location.pathname ==='/'? 'active':''} navbar-brand`}  to="/">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname ==='/'? 'active':''}`}  aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname ==='/about'? 'active':''}`} to="/about">About</Link>
        </li>  
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success bg-success text-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      </div>
    </div>
    </React.Fragment>
  );
}

export default Navbar;