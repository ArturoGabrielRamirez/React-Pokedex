
import React from "react"
import { useContext } from "react"
import { TeamContext } from "../providers/TeamProvider"
import TeamMemberListContainer from "./TeamMemberListContainer"




const PokemonDetail = ({ item }) => {

  const { team, addToTeam, clearTeam } = useContext(TeamContext)


  const handleClick = () => {
    addToTeam(item)
  }

  const handleClickToClear = () => {
    clearTeam()
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h1>{item.name}</h1>
        <p> # {item.id}</p>
        <img src={item.sprites.front_default} alt={item.name} />
        <p>Height: {item.height}</p>
        <p>Weight: {item.weight}</p>
        <p>Base experience: {item.base_experience}</p>
        <p>Abilities: {item.abilities.map((item) => item.ability.name + ", ")}</p>
        <p>Types: {item.types.map((item) => item.type.name + ", ")}</p>
        <button onClick={handleClick} >Add To Team</button>
      </div>

      <div>
        <h1>Team</h1>

        
          <TeamMemberListContainer team={team} />
        

        <button onClick={handleClickToClear}>Clear Team</button>
      </div>
    </>
  )
}
export default PokemonDetail