import React, { Component } from "react";
import ContactForm from "view/shared/contactForm";
import { Container, Row } from "reactstrap";
import { ImageBlock } from "./imageBlock";
import style from "./style.module.scss";
type ContactProps = {};
type ContactState = {};
class ContactUs extends Component<ContactProps, ContactState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <div className="container__wrapper">
            <div className={style["content__wrapper"]}>
              <div className={style["item__wrapper"]}>
                <div className={style["item"]}>
                  <ImageBlock />;
                </div>
              </div>
              <div className={style["item__wrapper"]}>
                <div className={style["item"]}>
                  <div className={style["item__title"]}>Drop us a Note</div>
                  <ContactForm />;
                </div>
              </div>
            </div>
          </div>
        </Row>
        {/* <Row>
          <div className={style["container__wrapper"]}>
            <div className={style["item__wrapper"]}>
              <ImageBlock />
            </div>

            <div className={style["item__wrapper"]}>
              <ContactForm />
            </div>
          </div>
        </Row> */}
      </Container>
    );
  }
}

export default ContactUs;
