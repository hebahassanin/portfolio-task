import React from 'react'
// import sidebarImage from '../../assets/logo.jpg';
import { Link, NavLink } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

export default function NavBar() {
  
  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        
          {/* Show button in small devices */}
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <SideBar/>
            <ul className="navbar-nav mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/skills">Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/experience">Experience</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/work">Work</NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div className="offcanvas-body">
        <SideBar/>
        <ul className="navbar-nav text-center">
          <li className="nav-item"><NavLink className="nav-link" to="/home">Home</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/skills">Skills</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/experience">Experience</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/work">Work</NavLink></li>
        </ul>
      </div>
    </div>














      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
       
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <SideBar/>
          <ul className="navbar-nav mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/skills">Skills</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/experience">Experience</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/work">Work</NavLink>
            </li>
          </ul>
        </div>
      </div>
  </nav> */}
                   
    </div>
  )
}
