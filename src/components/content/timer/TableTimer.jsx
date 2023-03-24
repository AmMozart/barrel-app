import React from "react";
import style from "./TableTimer.module.css";
import OneTimer from "./OneTimer";

const TableTimer = (props) => {
  return (
    <div>
      <div className={style.timer}>
        <div className={style.select}>Выбор</div>
        <div className={style.mode}>Режим</div>
        <div className={style.time}>Время</div>
      </div>
      <OneTimer
        className={style.one}
        timer={props.timer[0]}
        setTimer={props.setTimer}
      />
      <OneTimer
        className={style.one}
        timer={props.timer[1]}
        setTimer={props.setTimer}
      />
      <OneTimer
        className={style.one}
        timer={props.timer[2]}
        setTimer={props.setTimer}
      />
      <OneTimer
        className={style.one}
        timer={props.timer[3]}
        setTimer={props.setTimer}
      />
    </div>
  );
};

export default TableTimer;
