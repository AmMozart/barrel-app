import React from 'react';
import style from './ChangeButton.module.css';

export default function ChangeButton(props){
  let {text, isActive} = props;
  return(
    <button className={isActive === true ? style.btnactive : style.btninactive} 
          onClick={props.onClick}>{text}
        </button>
  )
}
