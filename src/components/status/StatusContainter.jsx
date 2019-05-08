import { connect } from 'react-redux';
import Status from './Status';

let mapStateToProps = (state) => {
  return {
    // powerMode: state.barrel.powerMode,
    // tempMode: state.barrel.tempMode,
    // waterFlow: state.barrel.waterFlow,
    pressureSystem: state.barrel.pressureSystem,
    pressureBarrel: state.barrel.pressureBarrel,
    waterLevel: state.barrel.waterLevel,
    currentWaterFlow: state.barrel.currentWaterFlow
  }
}

let StatusContainer = connect(mapStateToProps)(Status);

export default StatusContainer;