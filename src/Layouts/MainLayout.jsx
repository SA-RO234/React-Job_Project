import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* This is  where the child route components should be rendered within the parent route's component (layout). */}
      <ToastContainer/>
    </div>
  );
};

export default MainLayout;
