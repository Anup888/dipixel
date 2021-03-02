import React, { Component } from "react";
// @ts-ignore
// import { slide as Menu } from "react-burger-menu";

class MobileMenu extends React.Component {
  showSettings(event: any) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a
          onClick={this.showSettings}
          className="menu-item--small"
          href="//#endregion"
        >
          Settings
        </a>
      </div>
    );
  }
}

export default MobileMenu;
