import { Coordinate } from './coordinate'
import { DefaultConfig } from '../area.slice'
import { Serialize } from '../../../pure/serialize'



export class CheckGameOver {

  static isCheck(snakeCoordsList) {
    const check = (
      this._isCheckSmashSnake(snakeCoordsList) ||
      this._isCheckOverflowArea(snakeCoordsList)
    )

    return check
  }


  static _isCheckSmashSnake(snakeCoordsList) {
    const snakeHeadCoordinate = Coordinate.constructorFromObject(snakeCoordsList[snakeCoordsList.length - 1])

    const copySnakeCoordsList = Serialize.copy(snakeCoordsList)
    copySnakeCoordsList.pop()

    copySnakeCoordsList.forEach(i => {
      if (snakeHeadCoordinate.isEqual(i)) {
        return true
      }
    })

    return false
  }


  static _isCheckOverflowArea(snakeCoordsList) {
    const snakeHeadCoordinate = Coordinate.constructorFromObject(snakeCoordsList[snakeCoordsList.length - 1])

    const check = (
      snakeHeadCoordinate.x < 0 ||
      snakeHeadCoordinate.x > DefaultConfig.area.width  ||
      snakeHeadCoordinate.y < 0 ||
      snakeHeadCoordinate.y > DefaultConfig.area.height
    )

    return check
  }
}