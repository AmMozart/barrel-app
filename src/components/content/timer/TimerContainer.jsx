import { connect } from "react-redux";
import Timer from "./Timer";
import {SET_TIMER} from  "../../../reducers/barrel";

let mapStateToProps = (state) => {
  return {
    timer: state.barrel.timer
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setTimer: (data, number) => 
      dispatch({ type: SET_TIMER, data: data }),
  }
}

let TimerContainer = connect(mapStateToProps, mapDispatchToProps)(Timer);
export default TimerContainer;