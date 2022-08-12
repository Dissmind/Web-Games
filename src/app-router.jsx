import { Routes, Route } from "react-router-dom"
import { Snake } from "./games/snake/snake"
import { Home } from "./home/home"
import { Chess } from './games/chess/chess'


export const AppRouter = () => (
  <Routes>
    <Route path={'/snake'} element={<Snake />} />
    <Route path={'/chess'} element={<Chess />} />
    <Route path={'/'} element={<Home />} />
  </Routes>
)