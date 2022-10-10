import React from "react";
import { Link, Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
    const location = useLocation();
    let navigate = useNavigate();
    console.log('location', location)
  return (
    <div>
      
      <NavLink to="dasmsg" style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}>DashboardMessages</NavLink>
      <Link
        to="dastask"
        
      >
        Dashboardtask
      </Link>
      <button onClick={() => navigate('/')}>Home</button>
      <Outlet />
    </div>
  );
};

export default Dashboard;
