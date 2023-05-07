import { Link } from "react-router-dom"
import { LoginContext } from "../providers/LoginProvider"
import { useContext } from "react"

const Header = () => {

  const {logueado, user, handleLogOut } = useContext(LoginContext)

  console.log(user)



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
        <div className="flex flex-row gap-4">
          {logueado ? (
            <>
              <h1>{`bienvenido ${user.displayName}`}</h1>
              <button onClick={handleLogOut}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  )
}
export default Header