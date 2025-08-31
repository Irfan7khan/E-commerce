import { combineReducers } from "@reduxjs/toolkit";
import { cardsreducer } from "./reducer";

const rootred = combineReducers({
    cardsreducer
});
export default rootred;