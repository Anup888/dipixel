import { Container, Row } from "reactstrap";
import style from "assets/style/contentBlock/descriptionBlock/style.module.scss";
export const DescriptionBlock = (props: any) => {
  return (
    <>
      <Container className={style["container__spacing"]}>
        <Row>
          <div className={style["description__wrapper"]}>
            <div className={style["description__title"]}>About</div>
            <div className={style["description__content"]}>
              Do you enjoy shopping? Yes, Indeed, everyone enjoys shopping but
              what if you shop and also earn from it. So this is a product which
              allows you shop for others and you earn while you shop and deliver
              goods to them. Isn’t it cool. Yes, but to make this possible we
              created intuitive, smart and engaging system Factory Fresh mobile
              application for our client.
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};
