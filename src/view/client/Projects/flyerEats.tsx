import React, { Component } from "react";
import { Banner } from "view/shared/banner";
import { FlyerEatsBanner } from "data/Banner";
import { DescriptionBlock } from "view/shared/descriptionBlock";
import { SolutionBlock } from "view/shared/solutionBlock";
import { FeatureBlock } from "view/shared/featureBlock";
import { ProcessBlock } from "view/shared/processBlock";
import { FlyerEatsContent } from "data/ProjectsContent/flyerEats";
type ProjectsProps = {};
type ProjectsState = {};
class FlyerEats extends Component<ProjectsProps, ProjectsState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("flyerEats.tsx", FlyerEatsContent);
    return (
      <>
        <Banner src={FlyerEatsBanner.src} alt={FlyerEatsBanner.alt} />
        <DescriptionBlock
          descriptionBlock={FlyerEatsContent.descriptionBlock}
        />
        <SolutionBlock solutionBlock={FlyerEatsContent.solutionBlock} />
        <FeatureBlock featureBlock={FlyerEatsContent.featureBlock} />
        <ProcessBlock processBlock={FlyerEatsContent.processBlock} />
      </>
    );
  }
}

export default FlyerEats;
