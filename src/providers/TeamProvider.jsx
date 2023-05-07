import { createContext } from "react"
import { useState, useEffect } from "react"
import { toast } from "react-hot-toast"




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
      toast.error("Tu equipo esta lleno, no puedes añadir mas Pokemon.")
      return
    }
    if (team.find((pokemon) => pokemon.id === item.id)) {
      toast.error("Este Pokemon esta actualmente en tu equipo.")
    }
    else {
      const newTeam = [...team, item]
      setTeam(newTeam)
      localStorage.setItem("team", JSON.stringify(newTeam))
      toast.success("Pokemon añadido al equipo")
    }
  }

  const deleteFromTeam = (item) => {
    setTeam(team.filter((pokemon) => pokemon.id !== item.id))
    localStorage.removeItem("team", JSON.stringify(team.filter((pokemon) => pokemon.id !== item.id))
    )
    toast.success("Pokemon eliminado del equipo")
  }

  const clearTeam = () => {
    setTeam([])
    localStorage.removeItem("team")
    toast.success("Equipo eliminado")
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