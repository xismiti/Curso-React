import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './filme.css';
import { toast } from 'react-toastify';

function Filme() {
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [notFound, setNotFound] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: '81695997bf0b59e3c5eeda4e88d6bf8d',
            language: 'pt-BR',
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          setNotFound(1);
          setLoading(false);
        });
    }
    loadFilme();
  }, []);

  function salvarFilme() {
    const minhaLista = localStorage.getItem('@primeflix');

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmesSalvo) => filmesSalvo.id === filme.id,
    );

    if (hasFilme) {
      toast.warn('Esse filme ja esta na lista!');
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos));
    toast.success('Filme salvo com sucesso!');
  }

  if (loading) {
    return <div className="loading">Carregando Detalhes do filme...</div>;
  }
  if (notFound === 1) {
    return <div>Desculpe, mas não encontramos o filme.</div>;
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>

      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
