import React, { Component } from "react";
import { Banner } from "view/shared/banner";
import { serviceBanner } from "data/Banner";
import { CenterTitle } from "view/shared/subTitle";
import { ServiceContentBlock } from "view/shared/servicesContentBlock";
import style from "assets/style/style.module.scss";
type ServicesProps = {};
type ServicesState = {};
class Services extends Component<ServicesProps, ServicesState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Banner src={serviceBanner.src} alt={serviceBanner.alt} />
        <div className={style["page__wrapper"]}>
          <CenterTitle title="We Make Design Usable Through" />
          <div className="container__wrapper_service">
            <ServiceContentBlock />
          </div>
        </div>
      </>
    );
  }
}

export default Services;
