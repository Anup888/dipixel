import { Container, Row } from "reactstrap";
import style from "assets/style/processblock/style.module.scss";
import image1 from "assets/processblock/image1.png";
import image2 from "assets/processblock/image2.png";
import image3 from "assets/processblock/image3.png";
import image4 from "assets/processblock/image4.png";
import image5 from "assets/processblock/image5.png";
export const ProcessBlock = (props: any) => {
  return (
    <Container>
      <Row>
        <div className={style["block__container"]}>
          <div className={style["block__item"]}>
            <div className={style["grid__container"]}>
              <div className={style["grid__item"]}>
                <img className={style["image__item"]} src={image1} alt="img1" />
              </div>
              <div className={style["grid__item"]}>
                <img className={style["image__item"]} src={image2} alt="img2" />
              </div>
              <div className={style["grid__item"]}>
                <img className={style["image__item"]} src={image3} alt="img3" />
              </div>
              <div className={style["grid__item"]}>
                <img className={style["image__item"]} src={image4} alt="img4" />
              </div>
              <div className={style["grid__item"]}>
                <img className={style["image__item"]} src={image5} alt="img5" />
              </div>
            </div>
          </div>
          <div className={style["block__item"]}>
            <div className={style["content__container"]}>
              <div className={style["content__item"]}>
                <div className={style["item__title"]}>Process</div>
                <div className={style["item__description"]}>
                  To start with the project, we followed definite process
                  including information gathering, user research, business
                  analysis, and competitive analysis. After that we started
                  crearting information architecture, data flows, user flows and
                  basic wireframing. That’s how we gave the shape to the project
                  into live application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};
