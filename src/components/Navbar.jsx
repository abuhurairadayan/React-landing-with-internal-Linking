import React from "react";
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className={style.header}>
      <nav className={style.navContainer}>
        <h1 className={style.logo}>My Landing Page</h1>
        <ul className={style.navLinks}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
