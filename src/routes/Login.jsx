
import { useContext } from "react"
import { LoginContext } from "../providers/LoginProvider"



const Login = () => {
  const {handleEmail, handleLogin, handlePassword} = useContext(LoginContext)

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl">Login</h1>
          <input type="email" placeholder="Email" onChange={handleEmail} />
          <input type="password" placeholder="Password" onChange={handlePassword} />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )

}
export default Login
