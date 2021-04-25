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
        <i className="fa fa-bars"></i>
      </div>
    );
  }
}

export default MobileMenu;
