import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth"
import { auth } from "../firebase"
import { useEffect, useState, createContext } from "react"
import { toast } from "react-hot-toast"




export const LoginContext = createContext()

const { Provider } = LoginContext

const LoginProvider = ({ children }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [user, setUser] = useState({})
  const [logueado, setLogueado] = useState(false)

  useEffect(
    () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
          setLogueado(true)
        }
        else {
          setUser({})
          setLogueado(false)
        }
      })
    }, []
  )



  const handleEmail = (e) => {

    setEmail(e.target.value)

  }

  const handlePassword = (e) => {
    setPassword(e.target.value)

  }

  const handleName = (e) => {
    setName(e.target.value)
  }



  const handleRegister = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLogueado(true)
        setEmail("")
        setPassword("")
        setName("")
        toast.success("Usuario creado")
      })
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: name
        })
      })
      .then(() => {
        setUser({ email, displayName: name })
        setLogueado(true)

      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
        toast.error("Error al crear el usuario")
      })
  }




  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }



  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
        setLogueado(false)
        console.log("Signed Out")
      })
      .catch((error) => {
        console.log(error)
      })
    console.log(handleLogOut)
  }


  return (
    <Provider value={{ handleEmail, handlePassword, handleRegister, handleLogin, handleLogOut, handleName, logueado, user }}>
      {children}
    </Provider>
  )



}
export default LoginProvider