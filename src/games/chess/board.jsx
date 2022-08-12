import styled from 'styled-components'



export const Board = () => {








  let boardArray = []

  for (let i = 1; i <= 8; i++) {
    boardArray.push([])

    for (let j = 1; j <= 8; j++) {
      boardArray[i - 1].push(<BoardCell x={j} y={i} bgColor={((j % 2 == 0 && i % 2 == 0) || (j % 2 != 0 && i % 2 != 0)) ? 'white' : 'black'} />)
    }
  }


  return (
    <BoardStl>
      {
        boardArray.map(i => (
          <RowStl>
            {i.map(j => j)}
          </RowStl>
        ))
      }
    </BoardStl>
  )
}


// Styled

const BoardStl = styled.div`
  display: inline-block;
  border: 1px solid black;
`

const RowStl = styled.div`
  display: flex;
`



export const BoardCell = ({x, y, bgColor}) => {

  return (
    <div style={{
      background: bgColor,
      width: '100px',
      height: '100px'
    }}></div>
  )
}