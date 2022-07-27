import "./topbar.css";
import { NavLink } from "react-router-dom";
// import Settings from "../pages/settings/Settings";
// import { useState } from 'react';
export default function TopBar({ nameOfUser, username, handleLogout }) {
    // const [user, setuser] = useState(username);
    const user = username;
    const logoutStyle = {
        background: "none",
        color: "inherit",
        border: "none",
        padding: "0",
        font: "inherit",
        cursor: "pointer",
        outline: "inherit",
        marginRight: "20px"
    }
    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className="topListItem"><NavLink className="link" to="/" >HOME</NavLink></li>
                    <li className="topListItem"><NavLink className="link" to="/" >ABOUT</NavLink></li>
                    {user ? <li className="topListItem"><NavLink className="link" to="/write" >WRITE</NavLink></li> : <></>}
                    {/* <li className="topListItem"><NavLink className="link" to="/login" >{user && "LOGOUT"}</NavLink></li> */}
                    {user ? <li className="topListItem"><NavLink className="link" to="/login" ><button className="topListItem" style = {logoutStyle} onClick={handleLogout}>LOGOUT</button></NavLink></li> : <></>}
                    
                    <li className="topListItem"><NavLink className="link" to="/settings" >SETTINGS</NavLink></li>
                </ul>
            </div>
            <div className='topRight'>
                {user ? (<><span>{ nameOfUser }</span><img className="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU" alt="" /></>) :
                    (<ul className="topList"><li className="topListItem"><NavLink className="link" to="/login">LOGIN</NavLink></li>
                        {/* <li className="topListItem"><NavLink className="link" to="/register">REGISTER</NavLink></li> */}
                        </ul>)
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
