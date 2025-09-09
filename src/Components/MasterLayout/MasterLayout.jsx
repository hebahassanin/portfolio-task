import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
// import './app.css's

export default function MasterLayout() {
  return (
    <>
      <div className="container-fluid gx-0 bg-body-tertiary">
        <div className="row">
          <div className=" col-lg-2">
            {/* <SideBar/> */}
            <NavBar />
          </div>
          <div className="col-sm-12 col-lg-10 content px-0">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
