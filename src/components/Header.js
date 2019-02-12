import React from "react";
import PropTypes from "prop-types";

const Header = x => {
  const { branding } = x;
  return (
    // <div>
    //   <h1>{branding}</h1>
    // </div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li />
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.defaultProps = {
  branding: "My Contact App"
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
