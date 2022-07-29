import counterReducer from "./couter";
import isLoggedReducer from "./isLogged";

//combinar reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer,
    isLogged: isLoggedReducer
});

export default allReducers;