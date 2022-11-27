import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../assets/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="navbar_wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container-fluid">
            <div className="logo">
              <Link to="/">
                <img src={logo} className="img-fluid" alt="Loading" />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/"></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                    Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                    Checkout
                    </Link>
                  </li>
                  <li className="nav-item col-lg-12 col-md-12 ">
                    <Link className="nav-link" to="/addnew">
                    Add New Item
                    </Link>
                  </li>
          
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;