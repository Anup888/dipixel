import { Row, Col } from "reactstrap";
import { SmallCardItem } from "./smallCardItem";
import style from "assets/style/smallCard/style.module.scss";

type SmallCardProps = {
  SmallCardItemData: SmallCardItemData;
};
type CardItem = {
  title: string;
};
type SmallCardItemData = Array<CardItem>;

export const SmallCardHolder = (props: SmallCardProps) => {
  let smallCard: SmallCardItemData = props.SmallCardItemData;
  return (
    <div className={style["grid-container"]}>
      {smallCard.map((item: CardItem) => {
        return (
          <div>
            <SmallCardItem title={item.title} />
          </div>
        );
      })}
    </div>
  );
};
