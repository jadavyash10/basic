import { Buy_Cake, Num_BuY_Cake } from "../constanant/Index";

const intialstate = {
  numofcakes: 20,
};
export const CakeReducer = (state = intialstate, actions) => {
  switch (actions.type) {
    case Buy_Cake:
      return {
        ...state,
        numofcakes: state.numofcakes - 1,
      };
    case Num_BuY_Cake:
      return { ...state, numofcakes: state.numofcakes - actions.payload };
    default:
      return state;
  }
};
