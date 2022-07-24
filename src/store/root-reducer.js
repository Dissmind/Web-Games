import {combineReducers} from "@reduxjs/toolkit";
import {areaReducer} from "../games/snake/area.slice";



export const rootReducer = combineReducers({
  area: areaReducer
})