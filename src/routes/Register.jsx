
import { useContext } from "react"
import { LoginContext } from "../providers/LoginProvider"




const Register = () => {

  const {handleSubmit, handleEmail, handleRegister, handlePassword, handleName} = useContext(LoginContext)

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl">Register</h1>
          <input type="email" placeholder="Email" onChange={handleEmail} />
          <input type="password" placeholder="Password" onChange={handlePassword} />
          <input type="text" placeholder="Name" onChange={handleName} />
          <button type="submit" onClick={handleRegister}>Register</button>
        </div>
      </form>
    </div>
  )

}
export default Register