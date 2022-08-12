import {Link} from "react-router-dom";


export const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <ul>
        <li>
          <Link to={'/snake'}>Snake</Link>
        </li>

        <li>
          <Link to={'/chess'}>Chess</Link>
        </li>
      </ul>
    </div>
  )
}