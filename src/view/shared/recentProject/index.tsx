import React from "react";
import ProjectsItems from "./projectsItems";
import { Slideshow } from "view/shared/slideshow";

import style from "assets/style/recentProject/style.module.scss";
type ProjectsProps = {
  ProjectsItemData: ProjectsItemData;
};
type listItem = {
  src?: string;
};
type ProjectsItemData = Array<listItem>;
type ProjectsState = {};

class RecentProjects extends React.Component<ProjectsProps, ProjectsState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  getProjectsList = (ProjectsItemData: ProjectsItemData) => {
    return ProjectsItemData?.map((item: listItem, index) => {
      return <ProjectsItems key={index} index={index} src={item.src} />;
    });
  };
  render() {
    const ProjectsItemData = this.props.ProjectsItemData;
    const images = ProjectsItemData.map((item: any) => {
      return item.src;
    });
    console.log("image array", images);
    return (
      <>
        <div className={style["gridContainer"]}>
          {this.getProjectsList(ProjectsItemData)}
        </div>
        <div className={style["mobile__slider"]}>
          <Slideshow images={images} />
        </div>
      </>
    );
  }
}

export default RecentProjects;
