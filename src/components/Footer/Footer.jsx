import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10 spac-y-3 rounded-2xl">
      <aside>
        <Logo></Logo>
        <p className="">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to
          <br />
          business shipments — we deliver on time, every time.
        </p>
      </aside>
      <nav>
        <div className="flex items-center gap-10">
          <h2>Services</h2>
          <h2>Coverage</h2>
          <h2>About Us</h2>
          <h2>Pricing</h2>
          <h2>Blog</h2>
          <h2>Contact</h2>
        </div>
      </nav>
      <div className="grid grid-flow-col gap-10">
        <FaLinkedin />
        <FaXTwitter />
        <FaFacebook />
        <IoLogoYoutube />
      </div>
    </footer>
  );
};

export default Footer;
