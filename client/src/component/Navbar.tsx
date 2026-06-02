//import React, { use, useEffect } from "react";
import Logo from "../assets/logo.png";
import Profile from "../assets/profilepic.png";
import { Link, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const location = useLocation();
  // useEffect(() => {
  //  console.log(location.pathname);
  // });

  const allLinks = () => {
    return location.pathname === "/" ? (
      <>
        <Link to="/newtask">New Task</Link>

        <Link to="/mytask">All Tasks</Link>
      </>
    ) : location.pathname === "/mytask" ? (
      <Link to="/newtask">New Task</Link>
    ) : location.pathname === "/newtask" ? (
      <Link to="/mytask">All Tasks</Link>
    ) : location.pathname === "/edittask" ? (
      <Link to="/mytask">All Tasks</Link>
    ) : null;
  };

  return (
    <nav className="flex justify-between border-b border-gray-300 pl-4 pr-4">
      <div className="flex gap-2 items-center">
        <img src={Logo} alt="" />

        <p className="text-xl font-semibold text-[#2D0050]">TaskDuty</p>
      </div>

      <div className="flex gap-4 items-center">
        {allLinks()}
        <img src={Profile} alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
