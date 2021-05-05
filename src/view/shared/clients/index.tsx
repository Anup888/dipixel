import React from "react";
import ClientsItems from "./clientsItems";
import style from "assets/style/client/style.module.scss";
type ClientsProps = {
  ClientsItemData: ClientsItemData;
  icon?: boolean;
  type?: string;
};
type listItem = {
  src?: string;
};
type ClientsItemData = Array<listItem>;
type ClientsState = {};

class Clients extends React.Component<ClientsProps, ClientsState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  getProjectsList = (ClientsItemData: ClientsItemData) => {
    return ClientsItemData?.map((item: listItem, index) => {
      return (
        <ClientsItems
          key={index}
          index={index}
          src={item.src}
          icon={this.props.icon}
        />
      );
    });
  };
  render() {
    const ClientsItemData = this.props.ClientsItemData;
    return (
      <div className="container__wrapper">
        <div
          className={
            // this.props.icon ? style["gridContainerIcon"] : style["gridContainer"]
            this.props.icon
              ? this.props.type
                ? style["gridContainerIconType"]
                : style["gridContainerIcon"]
              : style["gridContainer"]
          }
        >
          {this.getProjectsList(ClientsItemData)}
        </div>
      </div>
    );
  }
}

export default Clients;
