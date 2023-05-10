import React from "react";
import css from "./AdminLogIn.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../../store/authSlice";

const Admin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const [form, setForm] = useState(css.form);
  const [title, setTitle] = useState(`Admin Login`);

  const dispach = useDispatch();

  const navigate = useNavigate();

  console.log();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user === process.env.REACT_APP_USERNAME || password === process.env.REACT_APP_PASSWORD) {
      console.log("Welcome");
      dispach(signIn(!auth));
      navigate("/dashboard");
    } else {
      setTitle(`Incorect`);
      setForm(css.formError);
    }
  };

  const handleChangeUser = (e) => {
    e.preventDefault();
    setUser(e.target.value);
    setTitle(`Admin Login`);
    setForm(css.form);
  };
  const handleChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    setTitle(`Admin Login`);
    setForm(css.form);
  };

  return (
    <div className={css.adminWrapper}>
      <h1 className={css.adminTitle}>{title}</h1>
      <form className={form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={user}
          onChange={handleChangeUser}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />
        <button className={css.adminButton} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Admin;
