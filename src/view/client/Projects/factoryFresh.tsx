import React, { Component } from "react";
import { Banner } from "view/shared/banner";
import { projectsBanner } from "data/Banner";
import { DescriptionBlock } from "view/shared/descriptionBlock";
import { SolutionBlock } from "view/shared/solutionBlock";
import { FeatureBlock } from "view/shared/featureBlock";
import { ProcessBlock } from "view/shared/processBlock";
import { FactoryFreshContent } from "data/ProjectsContent/factoryFresh";

type ProjectsProps = {};
type ProjectsState = {};
class FactoryFresh extends Component<ProjectsProps, ProjectsState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Banner src={projectsBanner.src} alt={projectsBanner.alt} />
        <DescriptionBlock
          descriptionBlock={FactoryFreshContent.descriptionBlock}
        />
        <SolutionBlock solutionBlock={FactoryFreshContent.solutionBlock} />
        <FeatureBlock featureBlock={FactoryFreshContent.featureBlock} />
        <ProcessBlock processBlock={FactoryFreshContent.processBlock} />
      </>
    );
  }
}

export default FactoryFresh;
