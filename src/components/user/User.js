import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  console.log("first")
  return (
    <div>
      <ul>
        <li>
          <Link to={"/user/1"}>User 1</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
};

export default User;
