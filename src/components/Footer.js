import React from "react";
import { FaCopyright } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

const showCurrentYear = () => {
  return new Date().getFullYear();
};
const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p className="flex items-center gap-x-1">
          Copyright <FaCopyright /> {showCurrentYear()} <BsDot /> Created by
          Aleksandra Chirtoska
        </p>
      </div>
    </footer>
  );
};

export default Footer;
