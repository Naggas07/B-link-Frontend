import React from "react";

const Nabvar = ({ logo }) => {
  return (
    <nav className="navbar navbar-light bg-light sticky-top">
      <a className="navbar-brand" href="/">
        <img src={logo} width="60" height="60" alt="logo" />
        B_link
      </a>
    </nav>
  );
};

export default Nabvar;
