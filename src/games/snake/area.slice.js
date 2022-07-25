import {createSlice} from "@reduxjs/toolkit";

const TorwaldEnum = {
  left: 'left',
  top: 'top',
  right: 'right',
  bottom: 'bottom'
}

export const defaultConfig = {
  startSnakeWidth: 3
}

const initialState = {
  snakeCoordsList: [],

  config: {
    startSnakeWidth: defaultConfig.startSnakeWidth
  },

  torwald: TorwaldEnum.left,

}




export const AreaSlice = createSlice({
  name: 'area',

  initialState,

  reducers: {
    init: (state, {payload}) => {
      state.torwald = TorwaldEnum.right

      // set head coordinate
      const headCoordinate = {
        x: 5,
        y: 2
      }

      state.snakeCoordsList.push(headCoordinate)

        // render snake
      switch (state.torwald) {
        case TorwaldEnum.left:

          break

        case TorwaldEnum.top:

          break

        case TorwaldEnum.right:
          const startSnakeWidth = state.config.startSnakeWidth
          const tailWidth = startSnakeWidth - 1

          for (let i = 1; i <= tailWidth; i++) {
            const x = headCoordinate.x - i

            const tailCoordinate = {
              x,
              y: headCoordinate.y
            }

            state.snakeCoordsList.unshift(tailCoordinate)
          }

          break

        case TorwaldEnum.bottom:

          break
      }
    },

    step: (state, {payload}) => {
      const snakeCoordsList = state.snakeCoordsList
      const lastIndexCoordinateList = snakeCoordsList.length - 1
      const headCoordinate = {
        x: snakeCoordsList[lastIndexCoordinateList].x,
        y: snakeCoordsList[lastIndexCoordinateList].y
      }

      state.snakeCoordsList.shift()



      switch (state.torwald) {
        case TorwaldEnum.left:
          headCoordinate.x = headCoordinate.x - 1
          break

        case TorwaldEnum.top:
          headCoordinate.x = headCoordinate.y + 1
          break

        case TorwaldEnum.right:
          headCoordinate.x = headCoordinate.x + 1
          break

        case TorwaldEnum.bottom:
          headCoordinate.x = headCoordinate.y - 1
          break
      }

      state.snakeCoordsList.push(headCoordinate)
    }
  }

})


export const testSelector = (state) => state.area.test
export const headCoordinateSelector = (state) => state.area.snakeCoordsList[state.area.snakeCoordsList.length - 1]
export const coordinateSelector = (state) => state.area.snakeCoordsList


export const {
  init,
  step
} = AreaSlice.actions


export const areaReducer = AreaSlice.reducer