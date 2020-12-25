import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h2>This is the header</h2>

      <div className="header__right"></div>

      <div className="header__left">
        <img src="" alt="" />

        <div className="header__search">
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Header;
