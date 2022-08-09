import {createSlice} from '@reduxjs/toolkit'
import { Coordinate } from './game-logic/coordinate'
import { CheckGameOver } from './game-logic/check-game-over'


export const TorwaldEnum = {
  left: 'left',
  top: 'top',
  right: 'right',
  bottom: 'bottom'
}


export const GameStatusEnum = {
  waitStart: 'wait-start',
  playing: 'playing',
  paused: 'paused',
  gameOver: 'game-over',
}


export const DefaultConfig = {
  startSnakeWidth: 5,
  area: {
    width: 25,
    height: 25
  },
  eatZoneCoordinates: {
    maxCoordinate: {
      maxX: 2,
      maxY: 2
    },
    minCoordinate: {
      minX: 24,
      minY: 24
    }
  }
}



const initialState = {
  snakeCoordsList: [],
  eatCoordinate: null,

  config: {
    // TODO: rename to 'length'
    startSnakeWidth: DefaultConfig.startSnakeWidth
  },

  gameStatus: GameStatusEnum.waitStart,

  torwald: TorwaldEnum.left
}



const eatSpawn = (state, {payload}) => {
  const limitCoordinateArray = state.snakeCoordsList
  const eatCoordinate = Coordinate.generateRandomCoordinate(DefaultConfig.eatZoneCoordinates, limitCoordinateArray)

  state.eatCoordinate = eatCoordinate
}



const getSnakeHeadCoordinate = (state) => {
  const snakeCoordsList = state.snakeCoordsList
  const lastIndexCoordinateList = snakeCoordsList.length - 1
  const headCoordinate = new Coordinate(snakeCoordsList[lastIndexCoordinateList].x, snakeCoordsList[lastIndexCoordinateList].y)

  return headCoordinate
}


export const AreaSlice = createSlice({
  name: 'area',

  initialState,

  reducers: {

    init: (state, {payload}) => {

      state.gameStatus = GameStatusEnum.playing

      // TODO: random torwald
      state.torwald = TorwaldEnum.right

      // set head coordinate
      const headCoordinate = new Coordinate(7, 2)

      state.snakeCoordsList.push(headCoordinate.parseToObject())


      // render snake
      switch (state.torwald) {
        case TorwaldEnum.left:
          // TODO: implement this
          break


        case TorwaldEnum.top:
          // TODO: implement this
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
          // TODO: implement this
          break
      }


      // render eat
      eatSpawn(state, {payload})
    },


    step: (state, {payload}) => {
      const headCoordinate = getSnakeHeadCoordinate(state)

      switch (state.torwald) {
        case TorwaldEnum.left:
          headCoordinate.x = headCoordinate.x - 1
          break

        case TorwaldEnum.top:
          headCoordinate.y = headCoordinate.y - 1
          break

        case TorwaldEnum.right:
          headCoordinate.x = headCoordinate.x + 1
          break

        case TorwaldEnum.bottom:
          headCoordinate.y = headCoordinate.y + 1
          break
      }

      const eatCoordinate = Coordinate.constructorFromObject(state.eatCoordinate)

      if (!(headCoordinate.isEqual(eatCoordinate))) {
        state.snakeCoordsList.shift()
      } else {
        eatSpawn(state, {payload})
      }

      state.snakeCoordsList.push(headCoordinate.parseToObject())

      if (CheckGameOver.isCheck(state.snakeCoordsList)) {
        state.gameStatus = GameStatusEnum.gameOver
      }
    },


    setTorwald: (state, {payload}) => {

      const {torwald} = payload

      if (torwald === TorwaldEnum.top && (state.torwald === TorwaldEnum.left || state.torwald === TorwaldEnum.right)) {
        state.torwald = torwald
        return
      }

      if (torwald === TorwaldEnum.right && (state.torwald === TorwaldEnum.top || state.torwald === TorwaldEnum.bottom)) {
        state.torwald = torwald
        return
      }

      if (torwald === TorwaldEnum.bottom && (state.torwald === TorwaldEnum.right || state.torwald === TorwaldEnum.left)) {
        state.torwald = torwald
        return
      }

      if (torwald === TorwaldEnum.left && (state.torwald === TorwaldEnum.top || state.torwald === TorwaldEnum.bottom)) {
        state.torwald = torwald
        return
      }

    },


    eatSpawn
  }

})


export const headCoordinateSelector = (state) => state.area.snakeCoordsList[state.area.snakeCoordsList.length - 1]
export const snakeCoordinateSelector = (state) => state.area.snakeCoordsList
export const eatCoordinateSelector = (state) => state.area.eatCoordinate
export const torwaldSelector = (state) => state.area.torwald
export const gameStatusSelector = (state) => state.area.gameStatus


export const {
  init,
  step,
  setTorwald
} = AreaSlice.actions


export const areaReducer = AreaSlice.reducer