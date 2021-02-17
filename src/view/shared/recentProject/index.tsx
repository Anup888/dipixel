import React from "react";
import ProjectsItems from "./projectsItems";
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
    return (
      <div className={style["gridContainer"]}>
        {this.getProjectsList(ProjectsItemData)}
      </div>
    );
  }
}

export default RecentProjects;
