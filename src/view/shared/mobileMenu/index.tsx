import React, { Component } from "react";
// @ts-ignore
// import { slide as Menu } from "react-burger-menu";
import style from "./style.module.scss";
class MobileMenu extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      menuDrawerOpen: false,
    };
  }

  toggleMenuDrawer = () => {
    this.setState({
      menuDrawerOpen: !this.state.menuDrawerOpen,
    });
  };

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <>
        <div>
          <i className="fa fa-bars" onClick={this.toggleMenuDrawer}></i>
        </div>
        {this.state.menuDrawerOpen && (
          <div className={style["menu__wraper"]}>Menu Items</div>
        )}
      </>
    );
  }
}

export default MobileMenu;
