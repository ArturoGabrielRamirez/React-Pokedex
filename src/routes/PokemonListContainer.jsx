import { React, useState, useEffect } from 'react'
import PokemonList from "../components/PokemonList"
import { BASE_URL } from "../components/utils"
import { Pagination } from '@mantine/core';
import { usePagination } from '@mantine/hooks';



const PokemonListContainer = () => {
  const [items, setItems] = useState([])
  const { active, setPage } = usePagination({
    initialPage: 1,
    limit: 20,
    total: 65,
  });

  useEffect(() => {
    fetch(`${BASE_URL}pokemon?limit=20&offset=${active * 20 - 20}`)
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
  }, [active])



  return (
    <>
      <h1>Pokedex</h1>
      <PokemonList items={items} />
      <Pagination
        styles={(theme) => ({
          control: {
            '&[data-active]': {
              backgroundImage: theme.fn.gradient({ from: 'pink.9', to: 'red.9' }),
            },
          },
        })}
        withEdges
        radius="lg"
        size="xl"
        position='center'
        page={active}
        limit={20}
        total={65}
        onChange={active => {
          setPage(active)
        }}

      />
    </>
  )
}
export default PokemonListContainer