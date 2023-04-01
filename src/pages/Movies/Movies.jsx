import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/api';

import { StyledDiv } from '../Home/Home.styled';
import { StyledForm } from './Movies.styled';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('movieQuery') ?? '';

  // const updateQueryString = (evt) => {
  //     if (evt.target.value === "") {
  //         return setSearchParams({});

  //     }
  //     return setSearchParams({movieQuery: evt.target.value});

  // }

  const getMoviesOnSearch = async query => {
    setIsLoading(true);
    try {
      const data = await searchMovies(query);
      if (!data.results.length) {
        throw new Error('There is no movies on your query! :( ');
      }
      console.log('data.total_results :>> ', data.total_results);
      setMovies(data.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = event => {
    event.preventDefault();

    const form = event.target;
    setSearchParams({ movieQuery: form.elements.search.value.trim() });
    setMovies([]);

    form.reset();

    // setPage(1);
  };

  useEffect(() => {
    if (!movieQuery) {
      return;
    }
    getMoviesOnSearch(movieQuery);
  }, [movieQuery]);

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSearchSubmit}>
        <input
          name="search"
          type="text"
          placeholder="Search movies..."
          autoComplete="off"
          autoFocus
        />
        <button type="submit">SEARCH</button>
      </StyledForm>
      {error && <p>{error.message} Please try again!</p>}
      {isLoading && <Loader />}
      <ul>
        {movies?.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: `/movies?movieQuery=${movieQuery}` }}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </StyledDiv>
  );
};

export default Movies;

// монтируем страницу коллекции, делаем хттп запрос по квери, рисуем по результатам список и кажд оборач в линк
// Коллекция хранится в стейте, а фильтр – в строке
// И мы можем использ значение параметра из строки и наш массив, чтобы отфильтр только те, ке подходят под условия
// в юз эффект делаем запрос по квери и запис результат в стейт
