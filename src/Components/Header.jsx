import React from 'react'
import logo from '../Assets/img/MenuMitra.png'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const Header = () => {
  return (
    
   <>
   <>
  {/* Start Rimu Navbar Area */}
  <div className="rimu-nav-style fixed-top">
    <div className="navbar-area">
      {/* Menu For Mobile Device */}
      <div className="mobile-nav">
        <Link to="/" className="logo">
          <img src={logo}  alt="Rimu Logo" width="60" height="60" />
        </Link>
      </div>
      {/* Menu For Desktop Device */}
      <div className="main-nav">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo}  alt="Rimu Logo" width="60" height="60" />
            </Link>
            <div>
             <Link to="/">
             <h4>
              Menumitra
             </h4>
             </Link>
            </div>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link dropdown-toggle active"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/features" className="nav-link dropdown-toggle">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/client" className="nav-link dropdown-toggle">
                    Clients
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/pricing" className="nav-link dropdown-toggle">
                    Pricing
                  </Link>
                </li>
              </ul>
              <div className="others-option">
                <a
                  className="sidebar-menu"
                  href="index.html#"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal2"
                >
                  <i className="fa fa-bars" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  {/* End Rimu Navbar Area */}
  {/* Start Sidebar Modal */}
  <Sidebar/>
  {/* End Sidebar Modal */}
</>

   </>

  )
}

export default Header