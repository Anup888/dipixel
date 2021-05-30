import { Container, Row } from "reactstrap";
import style from "assets/style/contentBlock/descriptionBlock/style.module.scss";
export const DescriptionBlock = (props: any) => {
  console.log("description block", props);
  return (
    <>
      <Container className={style["container__spacing"]}>
        <Row>
          <div className={style["description__wrapper"]}>
            <div className={style["description__title"]}>
              {props.descriptionBlock.title}
            </div>
            <div className={style["description__content"]}>
              {props.descriptionBlock.description}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};
