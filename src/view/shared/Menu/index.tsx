import React from "react";
import MenuItems from "./MenuItems";
import style from "assets/style/header/style.module.scss";
type MenuProps = {
  MenuItemData: MenuItemData;
};
type listItem = {
  itemName?: string | undefined;
  link?: string | undefined;
};
type MenuItemData = Array<listItem>;
type MenuState = {};

class Menu extends React.Component<MenuProps, MenuState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  getMenuList = (MenuItemData: MenuItemData) => {
    return MenuItemData?.map((item: listItem, index) => {
      return (
        <MenuItems
          key={index}
          index={index}
          itemName={item.itemName}
          link={item.link}
        />
      );
    });
  };
  render() {
    const MenuItemData = this.props.MenuItemData;
    return (
      <div className={style["menuStyle"]}>{this.getMenuList(MenuItemData)}</div>
    );
  }
}

export default Menu;
