import React, { Component } from "react";
import { Banner } from "view/shared/banner";
import { projectsBanner } from "data/Banner";
import { DescriptionBlock } from "view/shared/descriptionBlock";
import { SolutionBlock } from "view/shared/solutionBlock";
import { FeatureBlock } from "view/shared/featureBlock";
import { ProcessBlock } from "view/shared/processBlock";
import FactoryFresh from "./factoryFresh";
import FlyerEats from "./flyerEats";
type ProjectsProps = {};
type ProjectsState = {};
class Projects extends Component<ProjectsProps, ProjectsState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <FactoryFresh />
        {/* <FlyerEats /> */}
      </>
    );
  }
}

export default Projects;
