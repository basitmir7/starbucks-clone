import { BsSpotify, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { FaPinterestP, FaFacebookF } from "react-icons/fa";

const Social = () => {
  return (
    <div className="social-section">
      <div className="social-icons">
        <div className="icon">
          <BsSpotify className="i" />
        </div>
        <div className="icon">
          <FaFacebookF className="i" />
        </div>
        <div className="icon">
          <FaPinterestP className="i" />{" "}
        </div>
        <div className="icon">
          <BsInstagram className="i" />
        </div>
        <div className="icon">
          <BsYoutube className="i" />{" "}
        </div>
        <div className="icon">
          <BsTwitter className="i" />
        </div>
      </div>
      <p>© 2021 Starbucks Coffee Company. All rights reserved.</p>
    </div>
  );
};

export default Social;
