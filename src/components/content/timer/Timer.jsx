import React from "react";
import TableTimer from "./TableTimer";

const Timer = (props) => {
  return (
    <div>
      <h2> Таймер </h2>
      <TableTimer timer={props.timer} setTimer={props.setTimer} />
    </div>
  );
};

export default Timer;
