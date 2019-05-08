import { connect } from "react-redux";
import Settings from "./Settings";
import {SET_TENG_MODE} from  "../../../reducers/barrel";

let mapStateToProps = (state) => {
  return {
    tengMode: state.barrel.tengMode
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setTengModeMANUAL: () => 
      dispatch({ type: SET_TENG_MODE, data: "MANUAL" }),
    setTengModeOFF: () => 
      dispatch({ type: SET_TENG_MODE, data: "OFF" }),
    setTengModeAUTO: () => 
      dispatch({ type: SET_TENG_MODE, data: "AUTO" })
  }
}

let SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);
export default SettingsContainer;