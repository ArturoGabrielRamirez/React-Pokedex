
import TeamMemberList from "../components/TeamMemberList"
import { TeamContext } from "../providers/TeamProvider"
import { useContext } from "react"





const Team = () => {
  const { team, clearTeam } = useContext(TeamContext)

  const handleClickToClear = () => {
    clearTeam()
  }

  return (

    <div className="flex flex-col">

      <h1 className="text-red-400">Team</h1>

      <TeamMemberList team={team} />

      <button onClick={handleClickToClear}>Clear Team</button>

    </div>
  )
}
export default Team