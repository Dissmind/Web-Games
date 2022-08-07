import {useSelector} from "react-redux";
import {coordinateSelector} from "./area.slice";
import {useEffect, useState} from "react";
import styled from "styled-components";


export const CellStatusEnum = {
  empty: 'empty',
  snake: 'snake',
  eat: 'eat'
}


export const Cell = ({xCoordinate, yCoordinate}) => {
  const coordinateList = useSelector(coordinateSelector)

  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(() => {

    for (let i = 0; i < coordinateList.length; i++) {
      const cell = coordinateList[i]

      if (cell.x == xCoordinate && cell.y == yCoordinate) {
        setIsEmpty(false)

        return
      }
    }

    setIsEmpty(true)
  }, [coordinateList])

  return (
    <CellStl isEmpty={isEmpty}>
      {/*x {xCoordinate} | y {yCoordinate}*/}
    </CellStl>
  )
}


// == Styles ==
export const CellStl = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  
  background-color: ${({isEmpty}) => isEmpty ? 'black' : 'white'};
`