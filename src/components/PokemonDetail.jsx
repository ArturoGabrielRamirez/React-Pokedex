
import React from "react"
import { useContext } from "react"
import { TeamContext } from "../providers/TeamProvider"
import TeamMemberListContainer from "./TeamMemberListContainer"




const PokemonDetail = ({ item }) => {

  const { team, addToTeam, clearTeam } = useContext(TeamContext)

  const {name, sprites, id, height, weight, base_experience, abilities, types } = item
  const {front_default} = sprites


  const handleClick = () => {
    addToTeam(item)
  }

  const handleClickToClear = () => {
    clearTeam()
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h1>{name}</h1>
        <p> # {id}</p>
        <img src={front_default} alt={name} />
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <p>Base experience: {base_experience}</p>
        <p>Abilities: {abilities.map((item) => item.ability.name + ", ")}</p>
        <p>Types: {types.map((item) => item.type.name + ", ")}</p>
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