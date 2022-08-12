import { Area } from './area'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GameStatusEnum, gameStatusSelector, restartGame } from './area.slice'



export const Snake = () => {

  const dispatch = useDispatch()
  const gameStatus = useSelector(gameStatusSelector)

  useEffect(() => {
    if (gameStatus == GameStatusEnum.gameOver) {
      dispatch(restartGame(null))
    }
  }, [gameStatus])


  const onPause = () => {

  }


  return (
    <div>
      <h1>Snake</h1>

      <button
        onClick={onPause}
      >Pause</button>

      <Area />
    </div>
  )
}