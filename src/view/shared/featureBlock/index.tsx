import { Container, Row } from "reactstrap";
import style from "assets/style/featureblock/style.module.scss";
export const FeatureBlock = (props: any) => {
  const { backgroundColor, blockImages, content } = props.featureBlock;
  var styleBG = { background: backgroundColor } as React.CSSProperties;

  return (
    <Container className={style["container__spacing"]}>
      <Row>
        <div className={style["block__container"]} style={styleBG}>
          <div className={style["block__item"]}>
            <div className={style["grid__container"]}>
              {blockImages.map((item: any) => (
                <div className={style["grid__item"]}>
                  <img className={style["image__item"]} src={item} alt="img1" />
                </div>
              ))}
              {/* <div className={style["grid__item"]}>
                <img className={style["image__item"]} src={image1} alt="img1" />
              </div>
              <div className={style["grid__item"]}>
                <img className={style["image__item"]} src={image2} alt="img1" />
              </div>
              <div className={style["grid__item"]}>
                <img className={style["image__item"]} src={image3} alt="img1" />
              </div> */}
            </div>
          </div>
          <div className={style["block__item"]}>
            <div className={style["content__container"]}>
              <div className={style["content__item"]}>
                {content.map((item: any) => (
                  <>
                    <div className={style["item__title"]}>{item.title}</div>
                    <div className={style["item__description"]}>
                      {item.description}
                    </div>
                  </>
                ))}
                {/* <div className={style["item__title"]}>More features</div>
                <div className={style["item__description"]}>
                  The features include speed check, statistics about your
                  performance, chat, mailbox and many more. This doesn’t end
                  here, we are core part of Factory Fresh client team to enhance
                  and provide best user experience continuously.
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};
