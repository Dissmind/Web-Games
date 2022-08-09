import {Area} from "./area";
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { GameStatusEnum, gameStatusSelector } from './area.slice'



export const Snake = () => {

  const gameStatus = useSelector(gameStatusSelector)

  useEffect(() => {
    if (gameStatus == GameStatusEnum.gameOver) {
      alert('Game over')
    }
  }, [gameStatus])

  return (
    <div>
      <h1>Snake</h1>

      <Area />
    </div>
  )
}