import React,{useContext,useState} from "react";
import UserContext from "../contexts/UserContext";
function Login(){
    const [username,SetUsername] = useState("")
    const [password,Setpassword] = useState("")

    const {setUser} = useContext(UserContext)
    const handleClick = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div>
            <h2 className="text-white">Login</h2>
            <input type="text"
             value={username}
             onChange={(e)=>SetUsername(e.target.value)}
             placeholder="username" />
             {""}
            <input type="password"
             value={password}
             onChange={(e)=>Setpassword(e.target.value)}
             placeholder="Password" />
            <button className="text-white border-violet-900" 
            onClick={handleClick}>Submit</button>
        </div>
    )
}
export default Login;
