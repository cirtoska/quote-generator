import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar bg-neutral text-slate-50">
        <Link
          to="/"
          className="btn btn-ghost hover:bg-secondary normal-case text-xl mx-2"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="btn btn-ghost hover:bg-secondary normal-case text-xl"
        >
          About
        </Link>
      </div>
    </>
  );
};

export default Header;
