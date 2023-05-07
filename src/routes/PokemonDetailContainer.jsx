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
    const cancelSignal = new AbortController()

    toast.promise(
      fetch(`${BASE_URL}pokemon/${id}`, {
        signal: cancelSignal.signal
      })
        .then((res) => res.json()),
      {
        loading: 'Cargando...',
        success: (data) => {
          setItem(data)
          setLoader(false)
          return 'Pokemon cargado'
        }
      },
      {
        style: {
          minWidth: '250px',
        },
        success: {
          duration: 2000,
        },
        error: {
          duration: 10,
        }, 
      }
    )
    return () => {
      cancelSignal.abort()
    }
  }, [id])
  
       /*  .then((res) => res.json()),
      {
        loading: 'Cargando...',
        success: (data) => {
          setItem(data)
          setLoader(false)
          return 'Pokemon cargado'
        }
      },
      {
        style: {
          minWidth: '250px',
        },
        success: {
          duration: 2000,
        },
      }
    )
    return () => {
      cancelSignal.abort()
    }
  }, []) */

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