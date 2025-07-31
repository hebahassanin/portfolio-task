import React from 'react';
import sidebarImage from '../../assets/logo.jpg';
import NavBar from '../NavBar/NavBar';

export default function SideBar() {
  return (
    <div className=' sidebar bg-body-tertiary mt-0'>
        <a className="sidebar-brand" href="#">
          <img src={sidebarImage} className='rounded-circle' alt='logo' />
        </a>
      <h1 className='sidebar-title'><a href='#'>Jackson Ford</a></h1>
        <p className='sidebar-desc'><a href='#'>UI/UX/Designer</a> in Philippines</p>
    </div>
  )
}
