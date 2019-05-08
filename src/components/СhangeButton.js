import React from 'react';
import style from './ChangeButton.module.css';

export default function ChangeButton(props){
  let {text, active} = props;
  return(
    <button className={active === true ? style.btnactive : style.btninactive} 
          onClick={props.onClick}>{text}
        </button>
  )
}
