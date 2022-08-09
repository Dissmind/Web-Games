import { isEqualCoordinate } from '../../../pure-functions/equal-coordinates'



export class CheckGameOver {

  static isCheck(snakeCoordsList) {
    this._isCheckSmashSnake(snakeCoordsList)
  }


  static _isCheckSmashSnake(snakeCoordsList) {
    const snakeHeadCoordinate = snakeCoordsList[snakeCoordsList.length - 1]

    snakeCoordsList.forEach(i => {
      if (isEqualCoordinate(i, snakeHeadCoordinate)) {
        return true
      }
    })

    return false
  }
}