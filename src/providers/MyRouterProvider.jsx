import { RouterProvider, createBrowserRouter } from "react-router-dom"
import PokemonListContainer from "../routes/PokemonListContainer"
import LayOut from "../layout/LayOut"
import Team from "../routes/Team"
import Home from "../routes/Home"
import Contacts from "../routes/Contacts"
import PokemonDetailContainer from "../routes/PokemonDetailContainer"



const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "pokedex",
        element: <PokemonListContainer />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "details/:id",
        element: <PokemonDetailContainer />
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
])

export const MyRouterProvider = () => {
  return (
    <RouterProvider router={router} />
  )
}