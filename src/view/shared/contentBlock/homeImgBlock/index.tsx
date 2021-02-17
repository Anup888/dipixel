import { Row, Container } from "reactstrap";
import style from "assets/style/contentBlock/homeImgBlock/style.module.scss";
export const HomeImgBlock = (props: any) => {
  return (
    <Container>
      <Row>
        <div className={style["homeImgBlock"]}>
          <div className={style["img1_container"]}>
            <img
              className={style["img1"]}
              src={props.images.img1src}
              alt="img1"
            />
          </div>
          <div className={style["img2_container"]}>
            <img
              className={style["img2"]}
              src={props.images.img2src}
              alt="img2"
            />
          </div>
          <div className={style["img3_container"]}>
            <img
              className={style["img3"]}
              src={props.images.img3src}
              alt="img3"
            />
          </div>
        </div>
      </Row>
    </Container>
  );
};
