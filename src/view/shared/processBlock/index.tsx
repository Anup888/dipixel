import { Container, Row } from "reactstrap";
import style from "assets/style/processblock/style.module.scss";
export const ProcessBlock = (props: any) => {
  const { backgroundColor, blockImages, content } = props.processBlock;
  var styleBG = { background: backgroundColor } as React.CSSProperties;
  return (
    <Container>
      <Row>
        <div className={style["block__container"]} style={styleBG}>
          <div className={style["block__item"]}>
            <div className={style["grid__container"]}>
              {blockImages.map((item: any) => (
                <div className={style["grid__item"]}>
                  <img className={style["image__item"]} src={item} alt="img2" />
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
                {/* <div className={style["item__title"]}>Process</div>
                <div className={style["item__description"]}>
                  To start with the project, we followed definite process
                  including information gathering, user research, business
                  analysis, and competitive analysis. After that we started
                  crearting information architecture, data flows, user flows and
                  basic wireframing. That’s how we gave the shape to the project
                  into live application.
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};
