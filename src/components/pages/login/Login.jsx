import "./login.css"
import { useNavigate} from "react-router-dom"
import { useState ,useEffect} from "react";


export default function Login({parentcallback}) {
  let navigate=useNavigate();
  const [user,setuser]=useState("");
  const [pwd,setpwd]=useState("");
  const [success,setsuccess]=useState(false);

  const checkAuthentication = async(e) => {
    e.preventDefault(); 
    //USE API HERE
    setsuccess(true);
  
  }
  useEffect(()=>{
    if(success===true){
      parentcallback(user);
      navigate("/",{state:{userName:user}}) 
      console.log(user,pwd)
    }
  }, [success])

  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label >Email</label>
            <input type="text" className="loginInput" onChange={(e)=>setuser(e.target.value)} placeholder="Enter Your Email....." />
            <label >Password</label>
            <input type="password" className="loginInput" onChange={(e)=>setpwd(e.target.value)}placeholder="Enter Your Password....." />
            <button className="loginButton" onClick={checkAuthentication}>Login</button>
        </form>
    </div>
  )
}
