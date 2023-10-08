import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
// import SideMenu from "./SideMenu";
import AdminSideMenu from "./AdminSideMenu";

function AdminLayout() {
  return (
    <>
      <div className="md:h-16">
        <Header />
      </div>
      <div className="grid grid-cols-12 bg-gray-100 items-baseline">
        <div className="col-span-2 h-screen sticky top-0 hidden lg:flex">
          <AdminSideMenu />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default AdminLayout;