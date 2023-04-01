import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './home.css';
//https://api.themoviedb.org/3/movie/now_playing?api_key=81695997bf0b59e3c5eeda4e88d6bf8d&language=en-US&page=1

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '81695997bf0b59e3c5eeda4e88d6bf8d',
          language: 'pt-BR',
          page: 1,
        },
      });
      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);
    }
    loadFilmes();
  }, []);

  if (loading) {
    return <div className="loading">Carregando filmes...</div>;
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt="filme.title"
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
