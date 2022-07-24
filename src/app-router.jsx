import {Routes, Route} from "react-router-dom"
import {Snake} from "./games/snake/snake"
import {Home} from "./home/home"


export const AppRouter = () => (
  <Routes>
    <Route path={'/snake'} element={<Snake />} />
    <Route path={'/'} element={<Home />} />
  </Routes>
)