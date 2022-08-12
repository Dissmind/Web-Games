import { Area } from './area'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GameStatusEnum, gameStatusSelector, restartGame, togglePause } from './area.slice'



export const Snake = () => {

  const dispatch = useDispatch()
  const gameStatus = useSelector(gameStatusSelector)


  useEffect(() => {
    if (gameStatus == GameStatusEnum.gameOver) {
      dispatch(restartGame(null))
    }
  }, [gameStatus])


  // Pause button logic
  const [pausedTime, setPausedTime] = useState(null)
  const [pauseButtonText, setButtonText] = useState('Pause')

  const isPaused = () => pausedTime != null

  const onPause = () => {
    if (isPaused()) {
      return
    }

    console.log('start pause')

    setPausedTime(1)

    const text = (time) => `Wait pause ${time}${time % 2 == 0 ? '.' : '..'}`
    setButtonText(text(1))

    const interval = setInterval(() => {
      const newTime = pausedTime + 1

      console.log(newTime)
      setPausedTime(prevTime => prevTime + 1)

      setButtonText(text(newTime))
    }, 1000)

    setTimeout(() => {
      clearInterval(interval)
      setPausedTime(null)
      setButtonText(gameStatus === GameStatusEnum.playing ? 'Pause' : 'Continue playing')

      dispatch(togglePause(null))
    }, 3000)
  }



  return (
    <div>
      <h1>Snake</h1>

      <div>
        <button
          onClick={onPause}
        >{pauseButtonText}</button>
      </div>


      <Area />
    </div>
  )
}