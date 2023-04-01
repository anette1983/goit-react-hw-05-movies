import { StyledDiv } from 'pages/Home/Home.styled';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTrendingMovies = async () => {
    setIsLoading(true);
    try {
      const data = await fetchTrendingMovies();
      setMovies(data.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
    
  };

  useEffect(() => {
   
    getTrendingMovies();
  }, []);

  return (
      <StyledDiv>
        {error && <p>Something went wrong :( Try again later!</p>}
          <h1>Trending today</h1>
          <ul>
            {movies.map(({ original_title, name, id }) => (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: `/` }}>
                  {original_title || name}
                </Link>
              </li>
            ))}
          </ul>
        {isLoading && <Loader />}
      </StyledDiv>
  );
};

export default Home;
