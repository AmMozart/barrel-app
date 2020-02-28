import React from 'react';
import style from './Timer.module.css';
import TableTimer from './TableTimer';

const Timer = ((props) => {
  return (
    <div className = {style.general}>
      <h2> Таймер </h2>
      <TableTimer />
    </div>
  );
}
);

export default Timer;
