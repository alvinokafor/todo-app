import React from "react";
import "../assets/styles/Header.css";
import HeaderImg from "../assets/images/bg-desktop-dark.jpg";

const Header = () => {

  return (
    <section className="header">
      <img src={HeaderImg} className="img" alt="header img"></img>
    </section>
  );
};

export default Header;
