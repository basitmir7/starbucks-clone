import Button from "../button/button";
import { IoLocationSharp } from "react-icons/io5";
const Sidebar = ({ isActive }) => {
  return (
    <div className={`mobile-menu ${isActive ? "hidden" : "null"}`} id="menu">
      <ul>
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

      <div className="mobile-menu-bottom">
        <Button text="signin" bg="#fff" color="#000" />
        <Button text="join now" bg="#000" color="#fff" />
        <div>
          <a href="#">
            <IoLocationSharp style={{ fontSize: "21px" }} />
            <span>Find a store</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
