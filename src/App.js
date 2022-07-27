import TopBar from "./components/topbar/TopBar";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home"
import {  Routes, Route} from "react-router-dom";
import { useState } from "react";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
  const [userName,setuserName]=useState("");
  const [user,setuser]=useState(false);
  const handleParentCallback=(u)=>{
    setuserName(u)
    setuser(true)
  }

  // useEffect(()=>{
  //   if(user) setuser(true) 
  // },[user])

  // useEffect(()=>{
  //   if(!user) setuser(false) 
  // },[user])

  const handleLogout = () => {
    if (user) setuser(false);
  }

  return (
    <>
      <TopBar 
        nameOfUser = {userName}
        username = {user} 
        handleLogout = {handleLogout}
      />
      
      <main>
      {/* <div>{userName}</div> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={user ? <Home /> : <Login parentcallback={handleParentCallback}/>} />
          <Route path="/write" element={user ? <Write /> : <Login parentcallback={handleParentCallback} />} />
          <Route path="/settings" element={user ? <Settings /> : <Login parentcallback={handleParentCallback} />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="*" element = {<ErrorPage />}> </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
