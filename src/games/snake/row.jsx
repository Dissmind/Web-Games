import styled from "styled-components";
import {Cell} from "./cell";

export const Row = ({yCoordinate, cellCount}) => {

  const cells = () => {
    const result = []

    for (let i = 1; i <= cellCount; i++) {
      result.push(<Cell yCoordinate={yCoordinate} xCoordinate={i} />)
    }

    return result
  }


  return (
    <RowStl>
      {
        cells().map(i => i)
      }
    </RowStl>
  )
}



// == Styles ==
const RowStl = styled.div`
  display: flex;
`
