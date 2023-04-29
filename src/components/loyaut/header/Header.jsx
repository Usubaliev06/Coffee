import React from "react";
import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(css.menu);
  const [menuLinks, setMenuLinks] = useState(css.menuNone);

  const handleMenu = () => {
    setMenu(css.menuNone);
    setMenuLinks(css.menuLinks);
  };

  const handleMenuClose = () => {
    setMenu(css.menu);
    setMenuLinks(css.menuNone);
  };
  return (
    <div className={css.headerWrapper}>
      <div className='container'>
        <header>
          <div className={css.headerLeft}>
            <img src={logo} alt="" />
          </div>

          <div className={css.headerCenter}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/aboutUS">About US</NavLink>
            <NavLink to="/registration">Regestration</NavLink>
          </div>

          <div className={css.headerRight}>
            <NavLink to="/reservation">Book a table</NavLink>
          </div>

          <button className={menu} onClick={handleMenu}>
            Меню
          </button>

          <div className={menuLinks}>
            <button className={css.closeMenu} onClick={handleMenuClose}>
              ✖
            </button>
            <NavLink to="/"  onClick={handleMenuClose}>Home</NavLink>
            <NavLink to="/menu" onClick={handleMenuClose}>Menu</NavLink>
            <NavLink to="/aboutUS" onClick={handleMenuClose}>About US</NavLink>
            <NavLink to="/registration" onClick={handleMenuClose}>Regestration</NavLink>
          </div>

        
        </header>
      </div>
    </div>
  );
};

export default Header;
