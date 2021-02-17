import { Container, Row } from "reactstrap";
import style from "assets/style/solutionblock/style.module.scss";
import image1 from "assets/solutionblock/full-service-details-popup.png";
import image2 from "assets/solutionblock/full-service-details-popup1.png";
import image3 from "assets/solutionblock/full-service-details-popup2.png";
import image4 from "assets/solutionblock/Splash-Screen.png";
export const SolutionBlock = (props: any) => {
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
              <div className={style["grid__item"]}>
                <img className={style["image__item"]} src={image4} alt="img1" />
              </div>
            </div>
          </div>
          <div className={style["block__item"]}>
            <div className={style["content__container"]}>
              <div className={style["content__item"]}>
                <div className={style["item__title"]}>Our Solution</div>
                <div className={style["item__description"]}>
                  In our creamy solution, we provided the map as a home page
                  where shopper will get area wise available orders and it’s his
                  choice to go the area wherever he wants to go and select
                  orders to shop and deliver goods.
                </div>
              </div>
              <div className={style["content__item"]}>
                <div className={style["item__title"]}>Help Feature</div>
                <div className={style["item__description"]}>
                  What if shopper doesn’t know what’s on home page? Yeah; so we
                  give help upfront. Quickly access the help and understand the
                  concept.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};
