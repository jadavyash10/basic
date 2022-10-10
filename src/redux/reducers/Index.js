import { CakeReducer } from "./CakeReducer";
import { iceCreameReducer } from "./IceCreameReducer";
import { combineReducers } from "redux";
import { userReducer } from "./UserReducer";

const rootReducer = combineReducers({
  cake: CakeReducer,
  icecreame: iceCreameReducer,
  user: userReducer,
});

export default rootReducer;
