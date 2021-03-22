import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Redux-Example
          </Link>
        </div>
        <div>
          <Link to="/contact/add" className="btn btn-light ml-auto btn-sm">
            Create Content
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
