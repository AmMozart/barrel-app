import React from "react";
import style from "./TempMode.module.css";
import ChangeButton from "../../controls/СhangeButton";

const TempMode = (props) => {
  return (
    <div className={style.general}>
      <h2 className={style.name}>Температурный Режим</h2>
      <ChangeButton
        text="Ручной"
        onClick={props.setTempModeMANUAL}
        isActive={props.tempMode === "MANUAL"}
      />
      <ChangeButton
        text="Авто"
        onClick={props.setTempModeAUTO}
        isActive={props.tempMode === "AUTO"}
      />
    </div>
  );
};

export default TempMode;
