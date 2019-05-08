import React from "react";
import style from './PowerMode.module.css';
import ChangeButton from "../../СhangeButton";

const PowerMode = props => {
  return (
    <div className={style.general}>
      <h2 className={style.name}>Режим Работы</h2>
      <ChangeButton text='Включен' onClick= {props.setPowerModeON} active={props.powerMode === 'ON'}/>
      <ChangeButton text='Выключен' onClick= {props.setPowerModeOFF} active={props.powerMode === 'OFF'}/>
      <ChangeButton text='Авто' onClick= {props.setPowerModeAUTO} active={props.powerMode === 'AUTO'}/>
    </div>
  );
};

export default PowerMode;
