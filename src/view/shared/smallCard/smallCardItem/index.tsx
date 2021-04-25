import style from "assets/style/smallCard/style.module.scss";
type SmallCardItemProps = {
  title: string;
  iconUrl: string;
};

export const SmallCardItem = (props: SmallCardItemProps) => {
  return (
    <div className={style["grid-item"]}>
      <div className={style["icon__cl"]}>
        <img src={props.iconUrl} alt="icon" style={{ width: "100px" }} />
      </div>
      <div className={style["icon__cl"]}>{props.title}</div>
    </div>
  );
};
