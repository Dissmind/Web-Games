export const generateRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)


export const generateRandomLimits = (min, max, limitArray) => {

  const temp = generateRandom(min, max)

  limitArray.forEach(i => {
    if (i === temp) {
      return generateRandomLimits(min, max, limitArray)
    }
  })

  return temp
}


export const generateRandomCoordinate = (areaCoordinate, limitCoordinateArray) => {

  const {maxCoordinate: {maxX, maxY}, minCoordinate: {minX, minY}} = areaCoordinate

  const result = {
    x: generateRandom(minX, maxX),
    y: generateRandom(minY, maxY)
  }


  limitCoordinateArray.forEach(i => {
    if (i.x === result.x && i.y === result.y) {
      return generateRandomCoordinate(areaCoordinate, limitCoordinateArray)
    }
  })

  return result
}



// const areaCoordinate = {
//   maxCoordinate: {
//     maxX: 1,
//     maxY: 2
//   },
//   minCoordinate: {
//     minX: 1,
//     minY: 2
//   }
// }
//
// const limitCoordinateArray = [{x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}, {x: 5, y: 2}]
//
// console.log(generateCoordinate(areaCoordinate, limitCoordinateArray))



