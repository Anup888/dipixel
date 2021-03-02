import style from "assets/style/subTitle/style.module.scss";

type subTitleProps = {
  title: string;
  type?: string;
};

export const SubTitle = (props: subTitleProps) => {
  return (
    <>
      <div className={style["subTitle"]}>{props.title}</div>
    </>
  );
};

export const CenterTitle = (props: subTitleProps) => {
  return (
    <>
      <div className={style["center__subTitle"]}>{props.title}</div>
    </>
  );
};
