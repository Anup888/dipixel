import { Container, Row } from "reactstrap";
import style from "assets/style/featureblock/style.module.scss";
import image1 from "assets/featureblock/image1.png";
import image2 from "assets/featureblock/image2.png";
import image3 from "assets/featureblock/image3.png";
export const FeatureBlock = (props: any) => {
  return (
    <Container className={style["container__spacing"]}>
      <Row>
        <div className={style["block__container"]}>
          <div className={style["block__item"]}>
            <div className={style["grid__container"]}>
              <div className={style["grid__item"]}>
                <img className={style["image__item"]} src={image1} alt="img1" />
              </div>
              <div className={style["grid__item"]}>
                <img className={style["image__item"]} src={image2} alt="img1" />
              </div>
              <div className={style["grid__item"]}>
                <img className={style["image__item"]} src={image3} alt="img1" />
              </div>
            </div>
          </div>
          <div className={style["block__item"]}>
            <div className={style["content__container"]}>
              <div className={style["content__item"]}>
                <div className={style["item__title"]}>More features</div>
                <div className={style["item__description"]}>
                  The features include speed check, statistics about your
                  performance, chat, mailbox and many more. This doesn’t end
                  here, we are core part of Factory Fresh client team to enhance
                  and provide best user experience continuously.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};
