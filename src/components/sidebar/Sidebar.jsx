import "../sidebar/sidebar.css"

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle"> About Me</span>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSjkWNYkyTK94NswJwN5f4kUJ7eQMn2GJ7w&usqp=CAU" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugiat deserunt earum minima delectus eveniet laborum non exercitationem! </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle"> Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
