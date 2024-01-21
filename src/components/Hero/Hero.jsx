import React from "react";
import "./Hero.css";

import { MdComputer } from "react-icons/md";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Purchase <br />
              Powerful <br />
              Custom PC
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText ">
              For as far as the modern personal computer has come,{" "}
            </span>
            <span className="secondaryText ">
              there’s still no one-size-fits-all machine for every type of user.
            </span>
          </div>
          <div className="flexCenter search-bar">
            <MdComputer color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8700} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winners</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./pc-hero.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
