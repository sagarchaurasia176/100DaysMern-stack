import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <NavLink to='/BlogContent'>
      <button className=" p-1 cursor-pointer text-black bg-yellow-300 rounded-md ">
        Check Content
      </button>
      </NavLink>
     
    </div>
  );
};

export default Login;
