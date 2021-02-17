import { Row, Container } from "reactstrap";
import style from "assets/style/contentBlock/homeContent/style.module.scss";
export const HomeContent = (props: any) => {
  return (
    <Container>
      <Row>
        <div className={style["homeContent"]}>
          <div className={style["title"]}>{props.title}</div>
          <div className={style["description"]}>{props.description}</div>
        </div>
      </Row>
    </Container>
  );
};
