import React from "react";
import { Input, Label } from "reactstrap";
import style from "./style.module.scss";
export const TextInput = (props: any) => {
  const { type, name, placeholder, fieldLabel } = props;
  return (
    <>
      <div className={style["field__wrapper"]}>
        <div className={style["item"]}>
          <Label>{fieldLabel}</Label>
        </div>
        <div className={style["item"]}>
          {/* <div className={style["field__item"]}> */}
          <Input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`${style.field__item}`}
          />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
