import { Container, Row } from "reactstrap";
import style from "assets/style/contentBlock/titleDescriptionBlock/style.module.scss";
export const TitleDescriptionBlock = (props: any) => {
  return (
    <>
      <Container className={style["container__spacing"]}>
        <Row>
          <div className={style["description__wrapper"]}>
            <div className={style["description__title"]}>{props.title}</div>
            <div className={style["description__content"]}>
              {props.description}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};
