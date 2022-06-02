import { Link } from "react-router-dom";
import "../css/Header.css"

const Header = () => {
  return (
    <header className="header">
      <nav className="header-links">
        <Link to="/">Home</Link>
        <Link to="/DarkSide">darkside</Link>
        <Link to="/LightSide">LightSide</Link>
        <Link to="/Teaser">Teaser</Link>
      </nav>
    </header>
  );
};

export default Header;