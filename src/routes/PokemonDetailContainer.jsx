import { React, useState, useEffect } from 'react'
import PokemonDetail from "../components/PokemonDetail"
import { BASE_URL } from "../components/utils"
import { useParams } from 'react-router-dom'





const PokemonDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loader, setLoader] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    fetch(`${BASE_URL}pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoader(false)
        setItem(data)
      })
      .catch((error) =>
        console.log(error)
      )
  }, [])

  if (loader) {
    return <div>Cargando...</div>
  }

  return (

    <PokemonDetail item={item} />

  )
}


export default PokemonDetailContainer