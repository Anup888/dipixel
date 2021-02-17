import React, { Component } from "react";
import { Banner } from "view/shared/banner";
import { homeBanner } from "data/Banner";
import { SubTitle } from "view/shared/subTitle";
import { SmallCardHolder } from "view/shared/smallCard";
import { SmallCardData } from "data/smallCard";
import { HomeContent } from "view/shared/contentBlock/homeContent";
import { HomeImgBlock } from "view/shared/contentBlock/homeImgBlock";
import { HomeContentBlock, HomeImgData } from "data/Home";
import RecentProject from "view/shared/recentProject";
import { RecentProjectData } from "data/RecentProject";
import Clients from "view/shared/clients";
import { ClientsData, SocialData } from "data/Clients";
type HomeProps = {};
type HomeState = {};
class Home extends Component<HomeProps, HomeState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Banner src={homeBanner.src} alt={homeBanner.alt} />
        <SubTitle title="We Offer" />
        <SmallCardHolder SmallCardItemData={SmallCardData} />
        <HomeContent
          title={HomeContentBlock.title}
          description={HomeContentBlock.description}
        />
        <HomeImgBlock images={HomeImgData} />
        <SubTitle title="Recent Projects" />
        <RecentProject ProjectsItemData={RecentProjectData} />
        <SubTitle title="Our Clients" />
        <Clients ClientsItemData={ClientsData} />
        <SubTitle title="Social Media" />
        <Clients ClientsItemData={SocialData} icon={true} />
      </>
    );
  }
}
export default Home;
