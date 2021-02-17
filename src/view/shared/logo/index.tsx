import style from "assets/style/header/style.module.scss";

type LogoProps = {
  url: string;
  alt: string;
};

export const Logo = (props: LogoProps) => {
  return (
    <>
      <a className={style["logoStyle"]} href={"/"}>
        {/* <img alt={props.alt} src={props.url} /> */}
        DiPixel
      </a>
    </>
  );
};
