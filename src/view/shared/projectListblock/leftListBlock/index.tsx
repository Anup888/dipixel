import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import style from "assets/style/contentBlock/serviceContentBlock/style.module.scss";
import image from "assets/ProjectList/flyereat.png";
type LeftListBlockProps = { image?: boolean };
type LeftListBlockState = {};

class LeftListBlock extends Component<LeftListBlockProps, LeftListBlockState> {
  constructor(props: LeftListBlockProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row>
          <div className={style["content__Wrapper"]}>
            <div className={style["item"]}>
              <div className={style["item__wrapper"]}>
                <div className={style["item__title"]}>Flyer Eats</div>
                <div className={style["item__description"]}>
                  We are here to help you in your business, we connect with you
                  as design and development parter for your business. Even for
                  small requirement to bigger problems, we’ll stand for you,
                  we’ll design for you and develop for you.
                </div>
                <div className={style["item__list"]}>
                  <a href="/projects/flyer-eats">Explore more</a>
                </div>
              </div>
            </div>
            <div
              className={this.props.image ? style["itemImage"] : style["item"]}
            >
              <img className={style["imageStyle"]} src={image} alt="left" />
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}
export default LeftListBlock;
