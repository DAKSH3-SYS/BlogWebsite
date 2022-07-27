import "./single.css"
import Sidebar from "../../sidebar/Sidebar";
import SinglePost from "../../singlePost/SinglePost";
import {useEffect } from 'react';

export default function Single() {
  useEffect(() => {
  }, [])
  return (
    
    <div className="single">
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
