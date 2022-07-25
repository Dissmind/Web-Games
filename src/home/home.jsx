import {Link} from "react-router-dom";


export const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <ul>
        <li>
          <Link to={'/snake'}>Snake</Link>
        </li>
      </ul>
    </div>
  )
}