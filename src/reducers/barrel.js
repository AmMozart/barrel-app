export const SET_POWER_MODE = "SET_POWER_MODE";
export const SET_TEMP_MODE = "SET_TEMP_MODE";
export const SET_WATER_FLOW = "SET_WATER_FLOW";
export const SET_TENG_MODE = "SET_TENG_MODE";
export const SET_DAY_TENG = "SET_DAY_TENG";
export const SET_NIGHT_TENG = "SET_NIGHT_TENG";
export const SET_TIMER = "SET_TIMER";

const initState = {
  powerMode: "OFF",
  tempMode: "MANUAL",
  waterFlow: 500,
  pressureSystem: 1.5,
  pressureBarrel: 2,
  waterLevel: 850,
  currentWaterFlow: 700,
  tengMode: "MANUAL",
  tengChoisedDay: [false, false, false, false, false, false],
  tengChoisedNight: [false, false, false, false, false, false],
  timer: [
    { number: 1, select: true, mode: true, time: new Date() },
    { number: 2, select: true, mode: false, time: new Date() },
    { number: 3, select: true, mode: true, time: new Date() },
    { number: 4, select: true, mode: false, time: new Date() },
  ],
};

export default function barrel(state = initState, action) {
  switch (action.type) {
    case SET_POWER_MODE: {
      return { ...state, powerMode: action.data };
    }
    case SET_TEMP_MODE: {
      return { ...state, tempMode: action.data };
    }
    case SET_WATER_FLOW: {
      return { ...state, waterFlow: action.data };
    }
    case SET_TENG_MODE: {
      return { ...state, tengMode: action.data };
    }
    case SET_DAY_TENG: {
      let newArray = [...state.tengChoisedDay];
      newArray[action.data.name - 1] = action.data.value;
      return { ...state, tengChoisedDay: newArray };
    }
    case SET_NIGHT_TENG: {
      let newArray = [...state.tengChoisedNight];
      newArray[action.data.name - 1] = action.data.value;
      return { ...state, tengChoisedNight: newArray };
    }
    case SET_TIMER: {
      let newArray = [...state.timer];
      newArray[action.data.number - 1] = action.data;
      return { ...state, timer: newArray };
    }
    default: {
      return state;
    }
  }
}
