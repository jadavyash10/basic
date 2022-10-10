import { Buy_Icecreame, Num_Buy_Icecreame } from "../constanant/Index";

const initialstate = {
  numoficecreame: 50,
};

export const iceCreameReducer = (state = initialstate, action) => {
  switch (action.type) {
    case Buy_Icecreame:
      return {
        ...state,
        numoficecreame: state.numoficecreame - 1,
      };
    case Num_Buy_Icecreame:
      return {
        ...state,
        numoficecreame: state.numoficecreame - action.payload,
      };

    default:
      return state;
  }
};
