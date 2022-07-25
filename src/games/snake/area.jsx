import {Row} from "./row";
import {useDispatch, useSelector} from "react-redux";
import {headCoordinateSelector, init, step} from "./area.slice";
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

  useEffect(() => {
    dispatch(init())

    setInterval(() => {
      const payload = {headCoordinate: headCoordinate}

      dispatch(step(payload))
    }, 4000)
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