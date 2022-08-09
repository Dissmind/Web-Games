import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {rootReducer} from "./root-reducer";


const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export const setupStore = () => (
  configureStore({
    reducer: rootReducer,
    middleware: customizedMiddleware
  })
)