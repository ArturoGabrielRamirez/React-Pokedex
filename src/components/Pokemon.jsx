import { Link } from "react-router-dom"


const Pokemon = ({ item }) => {

  const {name, sprites, id } = item
  const {front_default} = sprites


  return (
    <li className="flex flex-col items-center border-4 border-black rounded-lg border-double" >
      <h3>{name}</h3>
      <img src={front_default} alt={name} />
      <h4>{id}</h4>
      <Link to={`/details/${item.id}`}>Ver Detalles</Link>
    </li>
  )
}
export default Pokemon