import React from "react";
import css from "./AdminLogIn.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { signIn } from "../../../store/authSlice";


const Admin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);

  
  const dispach = useDispatch( )

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user === "admin" || password === "1234") {
      console.log("Welcome");
      dispach(signIn(!auth))
      navigate('/dashboard')
    }else {
      alert("Wrong user or pasword")
    }

  };

  return (
    <div className={css.adminWrapper}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">ddd</button>
        </form>
    </div>
  );
};

export default Admin;
