import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";

function Register() {
  let history = useHistory();
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmpass: "",
  });
  const handleChange = (event, id) => {
    console.log("event", event.target.value, id),
      setState({
        ...state,
        [id]: event.target.value,
      });
  };
  const handleSubmit = () => {
    const { username, email, password, confirmpass } = state;
    console.log("username", username);

    console.log("email", email);
    console.log("password", password);
    console.log("confirm password", confirmpass);
  };
  const { username, email, password, confirmpass } = state;
  return (
    <div className="login-page">
      <div className="login">
        {/* <img src="../as" alt="" /> */}
        <h2>Signup</h2>

        {/* <p> Email</p> */}
        <input
          type="text"
          placeholder="User Name"
          // name="username"
          value={username}
          onChange={(event) => {
            handleChange(event, "username");
          }}
        />

        <input
          type="email"
          placeholder="Email"
          // name="username"
          value={email}
          onChange={(event) => {
            handleChange(event, "email");
          }}
        />
        {/* <p>Password</p> */}
        <input
          type="password"
          // name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            handleChange(event, "password");
          }}
        />
        {/* <p>Confirm Password</p> */}

        <input
          type="password"
          placeholder="Confirm Password"
          // name="password"
          value={confirmpass}
          onChange={(event) => {
            handleChange(event, "confirmpass");
          }}
        />
        <button
          type="submit"
          onClick={() => handleSubmit()}
          className="submit-button "
        >
          Sign In
        </button>
        <p>Already Sign In</p>
        <p
          onClick={() => {
            history.push("/index");
          }}
          className="submit-button-1 "
        >
          Login
        </p>
      </div>
    </div>
  );
}

export default Register;
