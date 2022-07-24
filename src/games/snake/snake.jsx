import styled from 'styled-components'

export const Snake = () => {

  return (
    <div>
      <h1>Snake</h1>

      <Area />
    </div>
  )
}








export const Area = () => {


  return (
    <div>
      Area

      <div>
        <CellStl />
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
  background: black;
`