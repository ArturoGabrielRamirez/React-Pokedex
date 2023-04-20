import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import TeamProvider from "../providers/TeamProvider"

const LayOut = () => {
  return (
    <TeamProvider >
      <Header />
      <Main />
      <Footer />
    </TeamProvider>
  )
}
export default LayOut