import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="container signup">
        <h1 className="text-center">SIGNUP</h1>
        <form name="f1">
          <div className="mb-3 message">
            <h2>Registrarse</h2>
            <label className="form-label">Username</label>
            <input
              className="form-control"
              placeholder="Your Username"
              type="text"
              value={username}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              placeholder="Your Username"
              type="text"
              value={email}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              placeholder="Your Username"
              type="text"
              value={password}
            />
          </div>

          <div className="text-center">
            <input
              className="btn btn-primary w-25"
              type="submit"
              value="Signup"
            />
          </div>
        </form>
      </div>
    </>
  );
};
