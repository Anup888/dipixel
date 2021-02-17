import style from "assets/style/smallCard/style.module.scss";
type SmallCardItemProps = {
  title: string;
};

export const SmallCardItem = (props: SmallCardItemProps) => {
  return <div className={style["grid-item"]}>{props.title}</div>;
};
