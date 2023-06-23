import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../contexts/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/users">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/addDoctor">Add A Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageDoctors">Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
