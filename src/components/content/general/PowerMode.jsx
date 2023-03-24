import React from "react";
import style from "./PowerMode.module.css";
import ChangeButton from "../../controls/СhangeButton";

const PowerMode = (props) => {
  return (
    <div className={style.general}>
      <h2 className={style.name}>Режим Работы</h2>
      <ChangeButton
        text="Включен"
        onClick={props.setPowerModeON}
        isActive={props.powerMode === "ON"}
      />
      <ChangeButton
        text="Выключен"
        onClick={props.setPowerModeOFF}
        isActive={props.powerMode === "OFF"}
      />
      <ChangeButton
        text="Авто"
        onClick={props.setPowerModeAUTO}
        isActive={props.powerMode === "AUTO"}
      />
    </div>
  );
};

export default PowerMode;
