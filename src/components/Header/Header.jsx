import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="flexCenter h-menu">
          <a href="">Custom PC</a>
          <a href="">Best PC Parts</a>
          <a href="">Budget PC</a>
          <a href="">Storages</a>
          <button className="button">
            <a href="">Contact Us</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
