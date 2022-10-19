import logo from "../../assets/logo.svg";
import { IoLocationSharp } from "react-icons/io5";
import Button from "../button/button";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">
          <a href="index.html">
            <img src={logo} alt="Starbucks" />
          </a>
        </div>

        <ul class="navbar-nav-left">
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Rewards</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
        </ul>

        <ul class="navbar-nav-right">
          <li>
            <a href="#">
              <IoLocationSharp />
              <span>Find a store</span>
            </a>
          </li>
          <li>
            <Button
              text="signin"
              bg="#fff"
              border="1px solid #000"
              color="#000"
            />
          </li>
          <li>
            <Button
              text="join now"
              bg="#000"
              border="1px solid #fff"
              color="#fff"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
