import { Container, Row } from "reactstrap";
import Clients from "view/shared/clients";
import { SocialData } from "data/Clients";
import style from "assets/style/contentBlock/titleDescriptionBlock/style.module.scss";
export const TitleDescriptionBlock = (props: any) => {
  return (
    <>
      <Container>
        <Row>
          <div className={style["description__wrapper"]}>
            <div className={style["description__title"]}>{props.title}</div>
            {!props.aboutus ? (
              <div className={style["description__content"]}>
                {props.description}
              </div>
            ) : (
              <div className={style["description__content"]}>
                <Clients
                  ClientsItemData={SocialData}
                  icon={true}
                  type="aboutus"
                />
              </div>
            )}
          </div>
        </Row>
      </Container>
    </>
  );
};
