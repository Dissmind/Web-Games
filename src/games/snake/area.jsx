import { useDispatch, useSelector } from 'react-redux'
import {
  DefaultConfig,
  headCoordinateSelector,
  init,
  setTorwald,
  step,
  TorwaldEnum,
} from './area.slice'
import { useEffect } from 'react'
import { Row } from './row'



export const Area = () => {

  const dispatch = useDispatch()

  const headCoordinate = useSelector(headCoordinateSelector)


  const renderArea = () => {

    const rowsCount = DefaultConfig.area.width
    const cellCount = DefaultConfig.area.height

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


  const controlEvents = () => {
    document.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'ArrowLeft':
          dispatch(setTorwald({torwald: TorwaldEnum.left}))
          break

        case 'ArrowUp':
          dispatch(setTorwald({torwald: TorwaldEnum.top}))
          break

        case 'ArrowRight':
          dispatch(setTorwald({torwald: TorwaldEnum.right}))
          break

        case 'ArrowDown':
          dispatch(setTorwald({torwald: TorwaldEnum.bottom}))
          break
      }
    })
  }


  useEffect(() => {
    dispatch(init())

    setInterval(() => {
      const payload = {headCoordinate: headCoordinate}

      dispatch(step(payload))
    }, 500)
  }, [])


  useEffect(() => {
    controlEvents()
  }, [])



  return (
    <div>
      Area

      <div>
        {
          renderArea()
        }
      </div>
    </div>
  )
}