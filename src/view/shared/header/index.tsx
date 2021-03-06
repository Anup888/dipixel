import React, { Component } from "react";
import { Logo } from "view/shared/logo";
import Menu from "view/shared/Menu";
import { Container, Row } from "reactstrap";
import MobileMenu from "view/shared/mobileMenu";

import style from "assets/style/header/style.module.scss";

type HeaderProps = {
  logoData: any;
  MenuItemData: any;
};
type HeaderState = {};
class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const logoData = this.props.logoData;
    const MenuItemData = this.props.MenuItemData;
    return (
      <Container>
        <Row>
          <div className={style["header_wrapper"]}>
            <div className="container__wrapper">
              <div className={style["header__item__wrapper"]}>
                <div className={style["header__logo"]}>
                  <Logo url={logoData.url} alt={logoData.alt} />
                </div>

                <div className={style["header__menu__wraper"]}>
                  <Menu MenuItemData={MenuItemData} />
                </div>
                <div className={style["header__mobile_menu__wraper"]}>
                  <MobileMenu />
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Header;
