import logo from "../../assets/logo.svg";
import { IoLocationSharp } from "react-icons/io5";
import Sidebar from "./sidebar";
import Button from "../button/button";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setisActive] = useState("false");
  const toggleMenu = () => {
    setisActive(!isActive);
    document.body.classList.toggle("no-scroll");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="index.html">
            <img src={logo} alt="Starbucks" />
          </a>
        </div>

        <ul className="navbar-nav-left text-md" style={{ marginBottom: "4px" }}>
          <li>
            <a href="/#">Menu</a>
          </li>
          <li>
            <a href="/#">Rewards</a>
          </li>
          <li>
            <a href="/#">Gift Cards</a>
          </li>
        </ul>

        <ul className="navbar-nav-right">
          <li>
            <a href="/#">
              <IoLocationSharp />
              <span>Find a store</span>
            </a>
          </li>
          <li>
            <Button text="signin" bg="#fff" color="#000" />
          </li>
          <li>
            <Button text="join now" bg="#000" color="#fff" />
          </li>
        </ul>
        <button
          type="button"
          className={`hamburger ${isActive ? "" : "open"}`}
          id="menu-btn"
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <Sidebar isActive={isActive} />
    </nav>
  );
};

export default Navbar;
