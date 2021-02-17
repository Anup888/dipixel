import React from "react";
import style from "assets/style/client/style.module.scss";

type ClientsItemsProps = {
  src?: string;
  index?: number;
  icon?: boolean;
};

type ClientsItemsState = {};
class ClientsItems extends React.Component<
  ClientsItemsProps,
  ClientsItemsState
> {
  constructor(props: ClientsItemsProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        key={this.props.index}
        className={this.props.icon ? style["gridItemIcon"] : style["gridItem"]}
      >
        <img className={style["imgItem"]} src={this.props.src} alt="Client" />
      </div>
    );
  }
}

export default ClientsItems;
