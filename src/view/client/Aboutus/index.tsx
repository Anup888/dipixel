import React, { Component } from "react";
import { Row, Container } from "reactstrap";
import { TitleDescriptionBlock } from "view/shared/titleDescriptionBlock";
import style from "assets/style/contentBlock/titleDescriptionBlock/style.module.scss";
import AboutusImage from "assets/images/home/about-us.png";

const defaultProps = {
  title: "",
  description: "",
};
type AboutProps = {};
type AboutState = {};
class AboutUs extends Component<AboutProps, AboutState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <div className={style["content__wrapper"]}>
          <TitleDescriptionBlock
            title="We are digital pixels"
            description="UX (user experience) research is the systematic investigation of users and their requirements, in order to add context and insight into the process of designing the user experience."
          />
          <TitleDescriptionBlock
            title="Our vision"
            description="UX (user experience) research is the systematic investigation of users and their requirements, in order to add context and insight into the process of designing the user experience."
          />
          <div className={style["img__wrapper"]}>
            <img src={AboutusImage} alt="about-us" />
          </div>
          <TitleDescriptionBlock
            title="Remote working"
            description="UX (user experience) research is the systematic investigation of users and their requirements, in order to add context and insight into the process of designing the user experience."
          />
          <TitleDescriptionBlock
            title="Location"
            description="UX (user experience) research is the systematic investigation of users and their requirements, in order to add context and insight into the process of designing the user experience."
          />
          <TitleDescriptionBlock
            title="Catch us on social media"
            aboutus={true}
          />
        </div>
      </Container>
    );
  }
}

export default AboutUs;
