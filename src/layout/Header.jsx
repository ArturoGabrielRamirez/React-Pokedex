import { Link } from "react-router-dom"

const Header = () => {

  return (
    <div className="flex items-center justify-between w-full p-4 bg-red-600 ">
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <nav className="flex flex-row">
        <ul className="flex gap-4 p-4">
          <li>
            <Link to="/pokedex">Pokedex</Link>
          </li>
          <li>
            <Link to="/Team">Team</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Header