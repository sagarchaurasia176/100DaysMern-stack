import React, { useContext } from "react";
import { AllStates } from "../context/userLoginContext";

//login () here
function Login() {
  const { user } = useContext(AllStates);
  return (
    <div>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="username"
          value={user}
          onChange={(e) => {e.target.value()}}
        />
      </div>
    </div>
  );
}

export default Login;
