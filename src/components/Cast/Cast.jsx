import { useState, useEffect } from 'react';
import { fetchCast } from 'services/api';
import { StyledUl } from './Cast.styled';
import Loader from 'components/Loader/Loader';
import placeholder from '../../images/placeholder.png';

const { useParams } = require('react-router-dom');

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  const getMovieCast = async id => {
    setIsLoading(true);
    try {
      const data = await fetchCast(id);
      if (!data.cast.length) {
        throw new Error(`Sorry, there isn't any info :(`);
      }
      setCast(data.cast);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!movieId) {
      return;
    }
    getMovieCast(movieId);
  }, [movieId]);
  // прямо тут хттп запрос
  // монтируем компонент, берем инфу из урл, уточняя, для кого брать данные и в юзэффкте запускаем хттп запрос
  return (
    <StyledUl>
      {error && <p>{error.message}</p>}
      {isLoading && <Loader />}
      {cast.map(({ character, id, name: actorName, profile_path }) => (
        <li key={id}>
          <div>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                  : `${placeholder}`
              }
              alt={actorName}
              width="300"
              loading="lazy"
            />
          </div>
          <div>
            <p>{actorName}</p>
            <p>Character: {character}</p>
          </div>
        </li>
      ))}
    </StyledUl>
  );
};

export default Cast;
