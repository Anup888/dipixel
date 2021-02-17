import React from "react";
import style from "assets/style/recentProject/style.module.scss";

type ProjectsItemsProps = {
  src?: string;
  index?: number;
};

type ProjectsItemsState = {};
class ProjectsItems extends React.Component<
  ProjectsItemsProps,
  ProjectsItemsState
> {
  constructor(props: ProjectsItemsProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div key={this.props.index} className={style["gridItem"]}>
        <img className={style["imgItem"]} src={this.props.src} alt="project" />
      </div>
    );
  }
}

export default ProjectsItems;
