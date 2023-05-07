import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import TeamProvider from "../providers/TeamProvider"
import { Toaster } from "react-hot-toast"


const LayOut = () => {
  return (

    <TeamProvider >
      <Header />
      <Main />
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
    </TeamProvider>

  )
}
export default LayOut