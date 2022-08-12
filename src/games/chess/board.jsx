import styled from 'styled-components'












class Coordinate {

  xIndex
  yIndex


  constructor(xIndex, yIndex) {
    this.xIndex = xIndex
    this.yIndex = yIndex
  }


  // isEmpty(gameBoardStatus, shift) {
  //   const xIndex = this.x + shift.xIndex - 1
  //   const yIndex = this.y + shift.yIndex - 1
  //
  //   const checkedCell = gameBoardStatus[xIndex][yIndex]
  //
  //   return checkedCell == null
  // }


  onShift(shift) {
    this.xIndex += shift.xIndex
    this.yIndex += shift.yIndex
  }


  static getShifted(coordinate /*TODO: this ref or copy object?*/, shift) {
    // if copy
    coordinate.onShift(shift)

    // if ref, then..  TODO: maybe copy?

    return coordinate
  }

}


// TODO: need Jest https://jestjs.io/
// TODO: VERY need TypeScript and refactoring
// TODO: neeeeeed sleeeep 0_o. To whom i'm say this?



export class Figure {

  type = FigureEnum.King // FigureEnum

  coordinate


  getSteps(gameBoardStatus, coordinate /*: Coordinate*/) {

    /*
     *
     * x < - Top
     * x > - Bottom
     * y > - Right
     * y < - Left
     *
     * */

    const stepList = []

    const kingShifts = [
      {xIndex: 0, yIndex: -1},    // Left
      {xIndex: -1, yIndex: -1},   // Left-Top
      {xIndex: -1, yIndex: 0},    // Top
      {xIndex: -1, yIndex: 1},    // Top-Right
      {xIndex: 0, yIndex: 1},     // Right
      {xIndex: 1, yIndex: 1},     // Right-Bottom
      {xIndex: 1, yIndex: 0},     // Bottom
      {xIndex: 1, yIndex: -1}     // Bottom-Left
    ]

    kingShifts.forEach(shift => {
      // TODO: const cellStatus /*: FigureEnum, EmptyCell, ErrorOverlayArea*/ = this.checkCellStatus()

      // If overlay area - not push to array.

      // TODO: If figure, then.. whose's she?


      if (true /*TODO: cellStatus === EmptyCell*/) {
        coordinate.onShift(shift)
        stepList.push(coordinate)
      }
    })

  }

}



const FigureEnum = {
  King: 'King',
  Queen: 'Queen',
  Bishop: 'Bishop',
  Knight: 'Knight',
  Rook: 'Rook',
  Pawn: 'Pawn'
}



const GameBoardStatus = [
  /*0*/ [FigureEnum.Rook /*x:0, y:0*/, FigureEnum.Knight /*x:0, y:1*/, FigureEnum.Bishop /*x:0, y:2*/, FigureEnum.King, FigureEnum.Queen, FigureEnum.Bishop, FigureEnum.Knight, FigureEnum.Rook],
  /*1*/ [FigureEnum.Pawn /*x:1, y:0*/, FigureEnum.Pawn /*x:1, y:1*/, FigureEnum.Pawn, FigureEnum.Pawn, FigureEnum.Pawn, FigureEnum.Pawn, FigureEnum.Pawn, FigureEnum.Pawn],
  /*2*/ [null, null, null, null, null, null, null, null],
  /*3*/ [null, null, null, null, null, null, null, null],
  /*4*/ [null, null, null, null, null, null, null, null],
  /*5*/ [null, null, null, null, null, null, null, null],
  /*6*/ [FigureEnum.Pawn, FigureEnum.Pawn, FigureEnum.Pawn, FigureEnum.Pawn, FigureEnum.Pawn, FigureEnum.Pawn, FigureEnum.Pawn, FigureEnum.Pawn],
  /*7*/ [FigureEnum.Rook, FigureEnum.Knight, FigureEnum.Bishop, FigureEnum.King, FigureEnum.Queen, FigureEnum.Bishop, FigureEnum.Knight, FigureEnum.Rook],
]


export const Board = () => {

  let boardArray = []

  for (let i = 1; i <= 8; i++) {
    boardArray.push([])

    for (let j = 1; j <= 8; j++) {

      const cellColor = ((j % 2 == 0 && i % 2 == 0) || (j % 2 != 0 && i % 2 != 0)) ? 'white' : 'black'
      boardArray[i - 1].push(<BoardCell x={j} y={i} bgColor={cellColor} />)
    }
  }






  return (
    <>
      <FigureStl />
      <BoardStl>
        {
          boardArray.map(i => (
            <RowStl>
              {i.map(j => j)}
            </RowStl>
          ))
        }
      </BoardStl>
    </>
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

const FigureStl = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: blue;
  
  position: relative;
  margin-bottom: -100px;
  margin-left: 100px;
  //top: 100px;

  //top: 0px;
  //left: 0px;
  
  
  z-index: 2000;
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