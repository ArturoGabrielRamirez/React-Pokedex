import { Link } from "react-router-dom"


const Pokemon = ({ item }) => {

  return (
    <li className="flex flex-col items-center border-4 border-black rounded-lg border-double" >
      <h3>{item.name}</h3>
      <img src={item.sprites.front_default} alt={item.name} />
      <h4>{item.id}</h4>
      <Link to={`/details/${item.id}`}>Ver Detalles</Link>
    </li>
  )
}
export default Pokemon