import logo from "./Assets/logo.png";
import cart_icon from "./Assets/cart_icon.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <p className="ms-5 ">
            <img src={logo} alt="" />
          </p>
          <Link className="navbar-brand " a="/">
            E-Shop
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto  mt-4 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link">
                  <Link to="/">Shop</Link>
                </p>
                {pathname === "/" && <hr />}
              </li>
              <li className="nav-item">
                <p className="nav-link">
                  <Link to="/men">Men</Link>
                </p>
                {pathname === "/men" && <hr />}
              </li>
              <li className="nav-item">
                <p className="nav-link">
                  <Link to="/women">Women</Link>
                </p>
                {pathname === "/women" && <hr />}
              </li>
              <li className="nav-item">
                <p className="nav-link">
                  <Link to="/kid">Kids</Link>
                </p>
                {pathname === "/kid" && <hr />}
              </li>
            </ul>
            <Link to="/Login">
              <button
                type="button"
                className="btn btn-outline-secondary me-5 rounded-pill px-5"
              >
                Login
              </button>
            </Link>
            <Link to="/Cart">
              <img src={cart_icon} width="32px" />
              <span className="translate-middle badge rounded-pill bg-danger mb-3">
                1+
                <span className="visually-hidden">Added to Cart</span>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
