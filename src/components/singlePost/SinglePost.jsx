import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUbYaLfRAU3s8UXYGGp_EgX2yedLrHXLYkiQ&usqp=CAU"
          alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit.
        <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-thumbs-up"></i>
          <i className="singlePostIcon fa-solid fa-share-nodes"></i>
          </div>
          </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>H.M. KUMAR</b></span>
          <span className="singlePostDate"> 24 july</span>
        </div>
        <div className="singlePostDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid maiores quidem praesentium odio cumque aspernatur! Explicabo earum, nihil quia voluptatum dolor ipsum iusto nemo animi veritatis eligendi a quis hic!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid maiores quidem praesentium odio cumque aspernatur! Explicabo earum, nihil quia voluptatum dolor ipsum iusto nemo animi veritatis eligendi a quis hic!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid maiores quidem praesentium odio cumque aspernatur! Explicabo earum, nihil quia voluptatum dolor ipsum iusto nemo animi veritatis eligendi a quis hic!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid maiores quidem praesentium odio cumque aspernatur! Explicabo earum, nihil quia voluptatum dolor ipsum iusto nemo animi veritatis eligendi a quis hic!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid maiores quidem praesentium odio cumque aspernatur! Explicabo earum, nihil quia voluptatum dolor ipsum iusto nemo animi veritatis eligendi a quis hic!
        </div>
      </div>
    </div>
  )
}
