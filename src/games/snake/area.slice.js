import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  test: 1
}



export const AreaSlice = createSlice({
  name: 'area',

  initialState,

  reducers: {
    add: (state, {payload}) => {
      state.test += payload.value
    }
  }

})


export const testSelector = (state) => state.area.test


export const {
  add
} = AreaSlice.actions


export const areaReducer = AreaSlice.reducer