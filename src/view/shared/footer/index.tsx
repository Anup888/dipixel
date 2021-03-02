import React, { Component } from "react";

import { Container, Row } from "reactstrap";
import style from "assets/style/footer/style.module.scss";

type FooterProps = {};
type FooterState = {};
class Footer extends Component<FooterProps, FooterState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row>
          <div className={style["footer_wrapper"]}>
            <div className={style["footer_heading"]}>
              We design to make people's life easier.
            </div>
            <div className={style["footer_link"]}>
              <a href="/projectlist">Explore Our Projects</a>
            </div>
            <div className={style["footer_link"]}>
              <a href="/contact-us">Contact us</a>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Footer;
