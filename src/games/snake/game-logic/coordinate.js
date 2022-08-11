import {
  generateRandom,
} from '../../../pure/random'



export class Coordinate {

  x = 0
  y = 0


  constructor(x, y) {
    this.x = x
    this.y = y
  }



  isEqual(otherCoordinate) {
    return this.x == otherCoordinate.x && this.y == otherCoordinate.y
  }


  static constructorFromObject({x, y}) {
    return new Coordinate(x, y)
  }


  parseToObject() {
    return {
      x: this.x,
      y: this.y
    }
  }


  static isEqualCoordinate(cordFirst, cordSecond) {
    return cordFirst.x == cordSecond && cordFirst.y == cordSecond.y
  }


  static generateRandomCoordinate(areaCoordinate, limitCoordinateArray) {

    const {maxCoordinate: {maxX, maxY}, minCoordinate: {minX, minY}} = areaCoordinate

    const result = new Coordinate(generateRandom(minX, maxX), generateRandom(minY, maxY))

    limitCoordinateArray.forEach(i => {
      if (i.x === result.x && i.y === result.y) {
        return this.generateRandomCoordinate(areaCoordinate, limitCoordinateArray)
      }
    })

    return result
  }
}