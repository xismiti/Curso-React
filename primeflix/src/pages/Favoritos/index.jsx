import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
function Favoritos() {
  const [filmes, Setfilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem('@primeflix');
    Setfilmes(JSON.parse(minhaLista) || []);
  }, []);

  function handleDelete(filme) {
    const filtroFilmes = filmes.filter((item) => {
      return item.id !== filme;
    });
    Setfilmes(filtroFilmes);
    localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes));
    toast.success('Filme removido com sucesso!');
  }

  return (
    <div className="meus-filmes">
      <h1>Meus filmes</h1>
      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <span>{filme.title}</span>
              <div>
                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                <button
                  onClick={() => {
                    handleDelete(filme.id);
                  }}
                >
                  Excluir
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Favoritos;
