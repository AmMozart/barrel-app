import React from "react";
import style from './TempMode.module.css';
import ChangeButton from "../../СhangeButton";

const TempMode = props => {
  return (
    <div className={style.general}>
        <h2 className={style.name}>Температурный Режим</h2>
          <ChangeButton text='Ручной' onClick= {props.setTempModeMANUAL} active={props.tempMode === 'MANUAL'}/>
          <ChangeButton text='Авто' onClick= {props.setTempModeAUTO} active={props.tempMode === 'AUTO'}/>
    </div>
  );
};

export default TempMode;
