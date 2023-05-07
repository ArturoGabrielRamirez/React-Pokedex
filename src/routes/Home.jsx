import Login from "./Login"
import Register from "./Register"
import { useState } from "react"


const Home = () => {

  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)

  const handleLogin = () => {
    setLogin(true)
    setRegister(false)
  }

  const handleRegister = () => {
    setRegister(true)
    setLogin(false)
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl">Bienvenido a nuestra Pokedex</h1>
      <div className="flex flex-col items-center">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </div>
      {login && <Login />}
      {register && <Register />}
    </div>
  )
}

export default Home



/* const Home = () => {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch(`${BASE_URL}pokemon?limit=1118`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.results)
      })
      .catch((error) =>
      console.log(error)
      )
  }, [])




  const searcher = (e) => {
    setSearch(e.target.value)
  }

  const handleButtonSearch = (e) => {
    e.preventDefault()
    fetch(`${BASE_URL}pokemon/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setItems([data])
      })
      .catch((error) =>
        console.error(error)
      )
  }

  const results = !search ? items : items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  console.log(results) */




/* return ( */

/*    <div className="flex flex-col items-center">
     <h1 className="text-4xl">Pokedex</h1>
     <form className="flex flex-col items-center">
       <input value={search} type="text" placeholder="Buscar Pokemon" onChange={searcher} />
       <button onClick={handleButtonSearch}>Buscar</button>
     </form>
     <ul className="flex flex-wrap justify-center">
       {results.map((item) => (
         <li className="flex flex-col items-center border-4" >
           <h3>{item.name}</h3>
           <Link to={`/details/${item.url.substring(34)}`}>Ver Detalles</Link>
         </li>
       ))}
     </ul>
   </div>
 )
} */