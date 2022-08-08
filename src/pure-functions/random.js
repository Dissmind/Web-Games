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
