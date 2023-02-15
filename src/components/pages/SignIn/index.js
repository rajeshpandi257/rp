import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";
function Login() {
  let history = useHistory();
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event, id) => {
    console.log("event", event.target.value, id),
      setState({
        ...state,
        [id]: event.target.value,
      });
  };
  const handleSubmit = () => {
    const { username, password } = state;
    console.log("username", username);
    console.log("password", password);
  };
  const { username, password } = state;
  return (
    <div className="login-page">
      <div className="login">
        <h3 className="h">login </h3>
        <input
          className="input"
          type="text"
          placeholder="User Name"
          // name="username"
          value={username}
          onChange={(event) => {
            handleChange(event, "username");
          }}
        />
        {/* <p>Password</p> */}
        <input
          className="input"
          type="password"
          placeholder="Password"
          // name="password"
          value={password}
          onChange={(event) => {
            handleChange(event, "password");
          }}
        />
        <button
          type="submit"
          onClick={() => handleSubmit()}
          className="submit-button "
        >
          Login
        </button>
        <br />
        <p>Don't Have an account ?</p>
        <p
          onClick={() => {
            history.push("/Register");
          }}
          className="submit-button-1 "
        >
          signup
        </p>
        <br />
        <p>or sign in using</p>
      </div>
    </div>
  );
}

export default Login;
