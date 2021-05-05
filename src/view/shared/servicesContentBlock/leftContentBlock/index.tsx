import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import style from "assets/style/contentBlock/serviceContentBlock/style.module.scss";
import image from "assets/services/undraw_prototyping_process_rswj 1.png";
type LeftContentBlockProps = { image?: boolean };
type LeftContentBlockState = {};

class LeftContentBlock extends Component<
  LeftContentBlockProps,
  LeftContentBlockState
> {
  constructor(props: LeftContentBlockProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row>
          <div className={style["content__Wrapper_right"]}>
            <div className={style["item"]}>
              <div className={style["item__wrapper"]}>
                <div className={style["item__title"]}>UX-UI Design</div>
                <div className={style["item__description"]}>
                  UX and UI design are two different elements of a single
                  consumer experience. UX refers to the user experience, which
                  focuses on how something works and how people interact with
                  it. UI, or user interface, focuses on the look and layout.
                </div>
                <div className={style["item__list"]}>
                  <ul>
                    <li>
                      <div className={style["list__title"]}>Work Flow</div>
                      <p className={style["list__description"]}>
                        UX (user experience) research is the systematic
                        investigation of users and their requirements, in order
                        to add context and insight into{" "}
                      </p>
                    </li>
                    <li>
                      <div className={style["list__title"]}>Wireframes</div>
                      <p className={style["list__description"]}>
                        UX (user experience) research is the systematic
                        investigation of users and their requirements, in order
                        to add context and insight into{" "}
                      </p>
                    </li>
                    <li>
                      <div className={style["list__title"]}>Visual Design</div>
                      <p className={style["list__description"]}>
                        UX (user experience) research is the systematic
                        investigation of users and their requirements, in order
                        to add context and insight into{" "}
                      </p>
                    </li>
                    <li>
                      <div className={style["list__title"]}>Prototyping</div>
                      <p className={style["list__description"]}>
                        UX (user experience) research is the systematic
                        investigation of users and their requirements, in order
                        to add context and insight into{" "}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={this.props.image ? style["itemImage"] : style["item"]}
            >
              <img src={image} alt="left" />
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}
export default LeftContentBlock;
