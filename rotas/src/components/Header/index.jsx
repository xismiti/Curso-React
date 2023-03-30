import { Link } from 'react-router-dom';
import style from './style.css';

function Header() {
  return (
    <header>
      <h2>Sujeito Programador</h2>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}
export default Header;
