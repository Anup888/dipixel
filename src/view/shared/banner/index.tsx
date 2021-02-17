import style from "assets/style/banner/style.module.scss";
import { Container, Row } from "reactstrap";
type BannerProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export const Banner = (props: BannerProps) => {
  return (
    <Container>
      {/* <a className={style["bannerStyle"]} href={props.url}> */}
      <Row>
        <img
          className={style["bannerStyle"]}
          alt={props.alt}
          src={props.src}
          width={props.width}
          height={props.height}
        />
      </Row>
      {/* </a> */}
    </Container>
  );
};
