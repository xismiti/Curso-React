import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        Prime Flix
      </Link>
      <Link className="favorito" to="/minha-lista">
        Meus Filmes
      </Link>
    </header>
  );
}

export default Header;
