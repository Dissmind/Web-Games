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

