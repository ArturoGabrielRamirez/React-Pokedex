import { React, useState, useEffect } from 'react'
import PokemonList from "../components/PokemonList"
import { BASE_URL } from "../components/utils"



const PokemonListContainer = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}pokemon`)
      .then((response) => response.json())
      .then((data) => {
        return Promise.all(data.results.map(pokemon => fetch(`${pokemon.url}`)))
      })
      .then(res => {
        return Promise.all(res.map(pokemon => pokemon.json()))
      })
      .then(data => {
        setItems(data)
      })
      .catch((error) => {
        console.log(error);
      }
      )
  }, [])



  return (
    <>
      <h1>Pokedex</h1>
      <PokemonList items={items} />
    </>
  )
}
export default PokemonListContainer