import React, { Component } from "react";
import { Banner } from "view/shared/banner";
import { projectsListBanner } from "data/Banner";
import { CenterTitle } from "view/shared/subTitle";
import { ProjectListBlock } from "view/shared/projectListblock";
type ProjectListProps = {};
type ProjectListState = {};
class ProjectList extends Component<ProjectListProps, ProjectListState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Banner src={projectsListBanner.src} alt={projectsListBanner.alt} />
        <CenterTitle title="Our recognized projects" />
        <ProjectListBlock />
      </>
    );
  }
}

export default ProjectList;
