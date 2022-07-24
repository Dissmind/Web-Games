import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./root-reducer";


export const setupStore = () => (
  configureStore({
    reducer: rootReducer,
  })
)