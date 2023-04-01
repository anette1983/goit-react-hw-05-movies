import { useEffect, useState, useRef } from 'react';
import { Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { BackLink } from 'components/BackLink/Backlink';
import { StyledAdditionalDiv, StyledWrapperDiv } from './MovieDetails.styled';
import placeholder from '../../images/placeholder.png'
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  //params
  const { movieId } = useParams();
  //loaction
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  // const backLinkHref = location.state?.from ?? "/";
  //state
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //movieQuery
  const getMovieDetails = async id => {
    setIsLoading(true);
    try {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  //effect

  useEffect(() => {
    if (!movieId) {
      return;
    }
    getMovieDetails(movieId);
  }, [movieId]);

  // const movie = getMovieById(movieId);
  // Стейт, излоeдинг, ерорр Делаем запрос, записываем в стейи рендерим нужн разметку
  // useEffect(() => {

  // }, [])

  const {
    original_title,
    overview,
    genres,
    poster_path,
    vote_average,
    release_date,
  } = movie;
  const userScore = (vote_average * 10).toFixed(1);
  const getYear = new Date(release_date).getFullYear();

  return (
    <>
      {/* <BackLink to={backLinkHref}>Go back</BackLink> */}
      <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
      {/* При нажатии на один фильм, открыв страница этого фильма по айди и нужна ссылка, по которой сможем вернуться назада туда, откуда пришли */}
      {error && <p>Something went wrong :( Try again later!</p>}
      {isLoading ? <Loader/> :
      <StyledWrapperDiv>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `${placeholder}`
          }
          alt="poster" width="300" loading="lazy"
        />
        <div>
          <h1>
            {original_title} ({getYear})
          </h1>
          <p>User score: {userScore}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres?.length &&
              genres.map(({ id, name }) => <span key={id}>{name} </span>)}
          </p>
        </div>
      </StyledWrapperDiv>}
      <StyledAdditionalDiv>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </StyledAdditionalDiv>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
