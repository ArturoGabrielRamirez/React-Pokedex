import { React, useState, useEffect } from 'react'
import PokemonDetail from "../components/PokemonDetail"
import { BASE_URL } from "../components/utils"
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'



const PokemonDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loader, setLoader] = useState(true)
  const { id } = useParams()


  useEffect(() => {
    const abort = new AbortController;


    fetch(`${BASE_URL}pokemon/${id}`, {
      signal: abort.signal
    })
      .then((response) => {
        const p = response.json()
        return toast.promise(p,{
            loading: 'Cargando...',
            success: (data) => `Datos de ${data.name} cargados`,
            error: `No se pudo cargar los datos`
          })
      })
      .then((data) => {
        setItem(data)
        setLoader(false)
      })
      .catch((error) => {
        console.log(error);

      })
    return () => abort.abort()
  }, [id])


  if (loader) {
    return (
      <>
        <h1>Cargando...</h1>
      </>
    )
  }




  return (
    <>
      <PokemonDetail item={item} />
    </>
  )
}


export default PokemonDetailContainer