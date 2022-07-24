import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {add, testSelector} from "./area.slice";



export const Snake = () => {

  return (
    <div>
      <h1>Snake</h1>

      <Area />
    </div>
  )
}




const Cell = ({xCoordinate, yCoordinate}) => {
  return (
    <CellStl>
      x {xCoordinate} | y {yCoordinate}
    </CellStl>
  )
}


const Row = ({yCoordinate, cellCount}) => {

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


export const Area = () => {


  const renderArea = () => {

    const rowsCount = 10
    const cellCount = 10

    const rows = () => {
      const result = []

      for (let i = 1; i <= rowsCount; i++) {
        result.push(<Row yCoordinate={i} cellCount={cellCount} />)
      }

      return result
    }


    return (
      <>
        {
          rows().map(i => i)
        }
      </>
    )
  }

  const dispatch = useDispatch()

  const test = useSelector(testSelector)

  return (
    <div>
      Area

      <h1>Counter: {test}</h1>

      <button
        onClick={() => {
          const payload = {value: 3}

          dispatch(add(payload))
        }}
      >ADD</button>

      <div>
        {
          renderArea()
        }
      </div>
    </div>
  )
}



// == Styles ==
const RowStl = styled.div`
  display: flex;
`


const CellStl = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`