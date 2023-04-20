import { createContext } from "react"
import { useState, useEffect } from "react"




export const TeamContext = createContext()

const { Provider } = TeamContext


const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState([])

  useEffect(() => {
    const teamStorage = JSON.parse(localStorage.getItem("team"))
    if (teamStorage) {
      setTeam(teamStorage)
    }
  }, [])



  const addToTeam = (item) => {
    if (team.length > 5) {
      alert("Team Completo")
      return
    }
    if (team.find((pokemon) => pokemon.id === item.id)) {
      alert("Ya tienes ese pokemon en tu equipo")
    }
    else {
      const newTeam = [...team, item]
      setTeam(newTeam)
      localStorage.setItem("team", JSON.stringify(newTeam))
    }
  }

  const deleteFromTeam = (item) => {
    setTeam(team.filter((pokemon) => pokemon.id !== item.id))
    localStorage.removeItem("team", JSON.stringify(team.filter((pokemon) => pokemon.id !== item.id))
    )
  }

  const clearTeam = () => {
    setTeam([])
    localStorage.removeItem("team")
  }

  const valorDelContexto = {
    addToTeam,
    deleteFromTeam,
    clearTeam,
    team
  }

  return (

    <Provider value={valorDelContexto}>
      {children}
    </Provider>

  )
}
export default TeamProvider