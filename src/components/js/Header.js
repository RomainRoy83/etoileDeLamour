import { Link } from "react-router-dom";
import "../css/Header.css"

const Header = () => {
  return (
    <header className="header">
      <Link to="/"><img src="https://cdn.pixabay.com/photo/2021/03/22/22/06/couple-6115830_960_720.jpg" alt = "Dark Lovers" className="home"/></Link>
      


      <nav className="header-links">
        <Link to="/DarkSide"><img src="https://cdn.pixabay.com/photo/2020/05/31/23/54/luna-5244609_960_720.jpg"className="dark"/></Link>
        <Link to="/LightSide"><img src="https://cdn.pixabay.com/photo/2016/08/12/02/10/space-1587393_960_720.jpg"className="light"/></Link>

      </nav>
    </header>
  );
};

export default Header;