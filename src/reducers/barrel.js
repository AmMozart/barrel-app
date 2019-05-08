export const SET_POWER_MODE = 'SET_POWER_MODE';
export const SET_TEMP_MODE = 'SET_TEMP_MODE';
export const SET_WATER_FLOW = 'SET_WATER_FLOW';
export const SET_TENG_MODE = 'SET_TENG_MODE';
export const SET_DAY_TENG = 'SET_DAY_TENG';
export const SET_NIGHT_TENG = 'SET_NIGHT_TENG';

const initState = {
  powerMode: "OFF",
  tempMode: "MANUAL",
  waterFlow: 500,
  pressureSystem: 1.5,
  pressureBarrel: 2,
  waterLevel: 850,
  currentWaterFlow: 700,
  tengMode: 'MANUAL',
  tengChoisedDay: [],
  tengChoisedNight: []
}

export default function barrel(state = initState, action) {
  switch (action.type) {
    case SET_POWER_MODE: {
      return { ...state, powerMode: action.data }
    }
    case SET_TEMP_MODE: {
      return { ...state, tempMode: action.data }
    }
    case SET_WATER_FLOW: {
      return { ...state, waterFlow: action.data }
    }
    case SET_TENG_MODE: {
      return { ...state, tengMode: action.data }
    }
    // case SET_DAY_TENG: {
    //   for(let i=0; i<state.tengChoisedDay.length; i++)
    //     state.tengChoisedDay === action.data.tengNumber ?

    //   return { ...state, tengChoisedDay: action.data }
    // }
    // case SET_NIGHT_TENG: {
    //   return { ...state, tengChoisedNight: action.data }
    // }
    default: { return state; }
  }
}
