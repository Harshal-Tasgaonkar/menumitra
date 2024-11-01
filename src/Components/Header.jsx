import React,{useEffect} from 'react'
import logo from '../Assets/img/MenuMitra.png'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'


const Header = () => {


  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.navbar');
      const mobileHeader = document.querySelector('.mobile-nav');

      if (window.scrollY > 0) {
        header.classList.add('bg-white', 'shadow-sm');
        header.classList.remove('bg-transparent');

        if (mobileHeader) {
          mobileHeader.classList.add('bg-white', 'shadow-sm');

      } else {
        header.classList.remove('bg-white', 'shadow-sm');
        header.classList.add('bg-transparent');

        if (mobileHeader) {
          mobileHeader.classList.remove('bg-white', 'shadow-sm');
        }

      }
    }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    
   <>
   <>
  {/* Start Rimu Navbar Area */}
  
  <div className="rimu-nav-style fixed-top">
  
    <div className="navbar-area ">
      {/* Mobile Navbar: Visible only on smaller screens */}
      <div className="mobile-nav d-flex justify-content-between align-items-center d-lg-none  bg-white px-3 py-2">
      <div className="d-flex align-items-center">
              <Link to="/" className="logo">
                <img src={logo} alt="Menumitra Logo" width="30" height="30" />
              </Link>
              <Link to="/" className="text-dark ms-5" style={{ fontWeight: 'bold' }}>
                Menumitra
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileNavbar"
              aria-controls="mobileNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" />
            </button>
          </div>

      {/* Menu For Desktop Device */}
      <div className="main-nav">
        <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
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

      {/* Mobile Menu Links: Collapsible Menu for Mobile View */}
      <div className="collapse" id="mobileNavbar">
            <ul className="navbar-nav bg-white p-3">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/features" className="nav-link">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/client" className="nav-link">
                  Clients
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link">
                  Pricing
                </Link>
              </li>
            </ul>
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