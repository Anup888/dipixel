import React from "react";
//@ts-ignore
import { Link } from "react-router-dom";
import style from "assets/style/header/style.module.scss";
type MenuItemsProps = {
  itemName?: string;
  link?: string;
  img?: string;
  instructions?: string;
  index?: number;
};

type MenuItemsState = {};
class MenuItems extends React.Component<MenuItemsProps, MenuItemsState> {
  constructor(props: MenuItemsProps) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("this.props", this.props);
    return (
      <li key={this.props.index} className={style["menuItemStyle"]}>
        <Link className={style["menuItemStyle"]} to={`${this.props.link}`}>
          {this.props.itemName}
        </Link>
      </li>
    );
  }
}

export default MenuItems;
