import "./Header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Blog</span>
        <span className="headerTitleLg">Piramal</span>

      </div>
      <img className="headerImg" src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" alt="" />
    </div>
  
  );
}
