import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constant/routes';
import { FaUserPlus, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import car from '../../images/car.png';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(true);
  const userDataString = sessionStorage.getItem('userData');
  const userData = userDataString ? JSON.parse(userDataString) : null;
  let name = '';
  if (userData !== null) {
    name = userData.customerName.split(' ')[0];
  }

  const navigate = useNavigate();

  const handleLogOut = () => {
    sessionStorage.removeItem('userData');
    toast.info('Logged Out Successfully');
    navigate(routes.HOME);
  };

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const closeNavbar = () => {
    setCollapsed(true);
  };

  const getNavbarClass = () => {
    return collapsed ? 'collapse navbar-collapse' : 'navbar-collapse';
  };

  return (
    <nav className="navbar navbar-expand-lg cst-nav">
      <div className="container-fluid">
        <Link className="navbar-brand cst-brand" to={routes.HOME} onClick={closeNavbar}>
          SAFAR
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarTogglerDemo02"
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={getNavbarClass()} id="navbarTogglerDemo02">
          {userData ? (
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-color" to={routes.PROFILE} onClick={closeNavbar}>
                  <span>
                    <FaUser />
                  </span>
                  Hi, {name}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-color" to={routes.BOOKING} onClick={closeNavbar}>
                  <span>
                    <img style={{ width: '24px' }} src={car} alt="" />
                  </span>
                  Rent Car
                </Link>
              </li>
              <li className="nav-item" onClick={handleLogOut}>
                <Link className="nav-link text-color" to={routes.HOME} onClick={closeNavbar}>
                  <span>
                    <FaSignOutAlt />
                  </span>
                  Logout
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-color" to={routes.LOGIN} onClick={closeNavbar}>
                  <span>
                    <FaSignInAlt />
                  </span>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-color" to={routes.REGISTER} onClick={closeNavbar}>
                  <span>
                    <FaUserPlus />
                  </span>
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
