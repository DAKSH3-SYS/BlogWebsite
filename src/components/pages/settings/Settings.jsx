import Sidebar from "../../sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingTitle">
                <span className="settingsUpdateTitle">Update Your Account </span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU"
                     alt="" />
                     <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                     </label>
                     <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label >Username</label>
                <input type="text" placeholder="Daksh"/>
                <label >Email</label>
                <input type="Email" placeholder="daksh.jain3@gmail.com"/>
                <label >Password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>

    </div>
  )
}
