
import { TeamContext } from "../providers/TeamProvider"
import { useContext } from "react"


const TeamMember = ({ item }) => {
  const { deleteFromTeam } = useContext(TeamContext)

  const{name, sprites} = item
  const {front_default} = sprites

  const handleClick = () => {
    deleteFromTeam(item)
  }

  return (
    <li className="flex flex-col items-center">
      <img src={front_default} alt={name} />
      <h3>{name}</h3>
      <button onClick={handleClick}>Delete</button>
    </li>
  )
}
export default TeamMember