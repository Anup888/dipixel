import { Row, Col } from "reactstrap";
import { SmallCardItem } from "./smallCardItem";
import style from "assets/style/smallCard/style.module.scss";

type SmallCardProps = {
  SmallCardItemData: SmallCardItemData;
};
type CardItem = {
  title: string;
  iconUrl: string;
};
type SmallCardItemData = Array<CardItem>;

export const SmallCardHolder = (props: SmallCardProps) => {
  let smallCard: SmallCardItemData = props.SmallCardItemData;
  return (
    <div className="container__wrapper">
      <div className={style["grid-container"]}>
        {smallCard.map((item: CardItem) => {
          return (
            <div>
              <SmallCardItem title={item.title} iconUrl={item.iconUrl} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
