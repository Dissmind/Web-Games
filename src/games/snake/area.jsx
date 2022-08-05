import {Row} from "./row";
import {useDispatch, useSelector} from "react-redux";
import {headCoordinateSelector, init, setTorwald, step, TorwaldEnum, torwaldSelector} from "./area.slice";
import {useEffect} from "react";



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


  const headCoordinate = useSelector(headCoordinateSelector)
  const torwald = useSelector(torwaldSelector)


  useEffect(() => {
    dispatch(init())

    setInterval(() => {
      const payload = {headCoordinate: headCoordinate}

      dispatch(step(payload))
    }, 2000)
  }, [])


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