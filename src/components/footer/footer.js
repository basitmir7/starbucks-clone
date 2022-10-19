import "./footer.css";
import FooterHero from "./footerHero";
import Footerlinks from "./footerLinks";
import Social from "./social";
const Footer = () => {
  return (
    <div className="footer">
      <FooterHero />
      <Footerlinks />
      <Social />
    </div>
  );
};

export default Footer;
