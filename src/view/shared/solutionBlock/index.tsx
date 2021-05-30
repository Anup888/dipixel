import { Container, Row } from "reactstrap";
// import style from "assets/style/solutionblock/style.module.scss";
import style from "assets/style/featureblock/style.module.scss";

export const SolutionBlock = (props: any) => {
  const { backgroundColor, blockImages, content } = props.solutionBlock;
  var styleBG = { background: backgroundColor } as React.CSSProperties;
  var stylealignment = { columnGap: "15px" } as React.CSSProperties;
  return (
    <Container className={style["container__spacing"]}>
      <Row>
        <div className={style["block__container"]} style={styleBG}>
          <div className={style["block__item"]}>
            <div className={style["grid__container"]} style={stylealignment}>
              {blockImages.map((item: any) => (
                <div className={style["grid__item"]}>
                  <img className={style["image__item"]} src={item} alt="img1" />
                </div>
              ))}
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
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};
