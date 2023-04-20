
import { TeamContext } from "../providers/TeamProvider"
import { useContext } from "react"


const TeamMember = ({ item }) => {
  const { deleteFromTeam } = useContext(TeamContext)

  const handleClick = () => {
    deleteFromTeam(item)
  }

  return (
    <li className="flex flex-col items-center">
      <img src={item.sprites.front_default} alt={item.name} />
      <h3>{item.name}</h3>
      <button onClick={handleClick}>Delete</button>
    </li>
  )
}
export default TeamMember