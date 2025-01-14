import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-[1280px] h-[54px] px-[64px] bg-[#F7F7F7] flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <p className="text-sm text-black">
          Phone Number: 956 742 455 678
        </p>
        <span className="border-l border-gray-500 h-5"></span>
        <p className="text-sm text-black">
          Email: info@ddsgnr.com
        </p>
      </div>

      {/* Right Section: Social Icons */}
      <div className="flex items-center gap-4">
        <a href="#" aria-label="Facebook" className="text-black">
          <FaFacebookF size={16} />
        </a>
        <a href="#" aria-label="Instagram" className="text-black">
          <IoLogoInstagram size={16} />
        </a>
        <a href="#" aria-label="Twitter" className="text-black">
          <FaTwitter size={16} />
        </a>
        <a href="#" aria-label="LinkedIn" className="text-black">
          <FaLinkedin size={16} />
        </a>
      </div>
    </div>
  );
};

export default Header;
