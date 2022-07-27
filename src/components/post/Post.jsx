import "./post.css"
import { NavLink } from "react-router-dom";


export default function Post() {
    return (
        <div className="post">
            <img className="postImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUbYaLfRAU3s8UXYGGp_EgX2yedLrHXLYkiQ&usqp=CAU" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle"><NavLink className="link" to="/post/:postId" >Lorem ipsum dolor sit amet</NavLink></span>
                <span className="postAuthor"></span>
                <hr />
                <span className="postDate">-H.M.Mathur 10:35 24 July</span>
            </div>
            <p className="postDesc"><NavLink className="link" to="/post/:postId" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur assumenda ab asperiores neque debitis, magni, harum odio, accusamus vel quas aliquam esse nostrum ratione voluptatum nam fuga quaerat perspiciatis! Eos!</NavLink>
        
         </p>
        </div>
    )
}
