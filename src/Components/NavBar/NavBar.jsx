import React from 'react'
// import sidebarImage from '../../assets/logo.jpg';
import { Link, NavLink } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

export default function NavBar() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
          <img src={sidebarImage} className='rounded-circle' alt='logo' style={{width:'150px',height:'150px'}}/>
        </a> */}
        
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
  </nav>
                   
    </div>
  )
}
