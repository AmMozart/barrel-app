import React from 'react';
import ChangeButton from "../../СhangeButton";
import style from "./OneTimer.module.css";

const OneTimer = ((props) => {
  let timer = props.timer;
  if(!timer) {timer = { select:false, mode:false, time:0 }; }
  let {number, select, mode, time} = timer;


  const refCheckbox = React.createRef();
  //const modeON = React.createRef();
  //const modeOFF = React.createRef();
  const refTimeHours = React.createRef();
  const refTimeMinutes = React.createRef();

  let selectTimer = (e, bool=mode) => {
    let [hours, minutes] = getValidTime();

    let date = new Date();
    date.setHours(+(hours), +(minutes),0,0);

    const data = {
      number: number,
      select: refCheckbox.current.checked,
      mode: bool,
      time: date 
    };
    props.setTimer(data);
  }

  let getValidTime = () => {
    let hours = refTimeHours.current.value;
    let minutes = refTimeMinutes.current.value;
    hours = isNaN(hours) ? time.getHours() : hours;
    minutes = isNaN(minutes) ? time.getMinutes() : minutes;

    hours = hours >= 24 ? 0 : (hours < 0 ? 1 : hours);
    minutes = minutes >= 60 ? 59 : (minutes < 0 ? 1 : minutes);
    return [hours, minutes];
  }

  return (
      <div className = {style.oneTimer}>
        <label className={style.select}><input type='checkbox' ref={refCheckbox} checked={select} onChange={selectTimer}></input></label>
        <div className={style.mode}>
          <ChangeButton text='Вкл' onClick={(e)=>{selectTimer(e, true)}} isActive={mode} />
          <ChangeButton text='Выкл' onClick={(e)=>{selectTimer(e, false)}} isActive={!mode} />
        </div>
        <div className={style.time}>
          <input type='text' ref={refTimeHours} value={time.getHours()} onChange={selectTimer}/> час
          <input type='text' ref={refTimeMinutes} value={time.getMinutes()} onChange={selectTimer}/> мин.
        </div>
      </div>
  );
});

export default OneTimer;
