import { useSelector } from 'react-redux'
import { eatCoordinateSelector, snakeCoordinateSelector } from './area.slice'
import { useEffect, useState } from 'react'
import styled from 'styled-components'



export const CellStatusEnum = {
  empty: 'empty',
  snake: 'snake',
  eat: 'eat'
}



export const Cell = ({xCoordinate, yCoordinate}) => {

  const snakeCoordinateList = useSelector(snakeCoordinateSelector)
  const eatCoordinate = useSelector(eatCoordinateSelector)

  const [cellStatus, setCellStatus] = useState(CellStatusEnum.empty)

  const isEat = () => {
    if (eatCoordinate !== null && eatCoordinate.x == xCoordinate && eatCoordinate.y == yCoordinate) {
      setCellStatus(CellStatusEnum.eat)
      return true
    }

    return false
  }

  useEffect(() => {
    for (let i = 0; i < snakeCoordinateList.length; i++) {
      const cell = snakeCoordinateList[i]

      if (cell.x == xCoordinate && cell.y == yCoordinate) {
        setCellStatus(CellStatusEnum.snake)

        return
      }
    }

    if (!isEat()) {
      setCellStatus(CellStatusEnum.empty)
    }
  }, [snakeCoordinateList])


  useEffect(isEat, [eatCoordinate])



  return (
    <CellStl cellStatus={cellStatus}>
      {/*x {xCoordinate} | y {yCoordinate}*/}
      {/*{cellStatus}*/}
    </CellStl>
  )
}



// == Styles ==
export const CellStl = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  //font-size: 10px;
  //color: white;
  
  ${({cellStatus}) => cellStatus == CellStatusEnum.empty && 'background-color:  black;'}
  ${({cellStatus}) => cellStatus == CellStatusEnum.snake && 'background-color:  white;'}
  ${({cellStatus}) => cellStatus == CellStatusEnum.eat   && 'background-color:  red;'  }
`