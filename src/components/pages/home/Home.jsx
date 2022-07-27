import "./home.css"
import Header from "../../Header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";


export default function Home() {  
  return (
    <>
    {/* <TopBar /> */}
    <Header/>
    <div className="home">
      <Posts/>
      <Sidebar/>      
      </div>
    </>
  )
}
