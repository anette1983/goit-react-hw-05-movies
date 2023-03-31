import { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
// import { BackLink } from 'components/BackLink/Backlink';


const MovieDetails = () => {
  const { movieId } = useParams();
  console.log('movieId :>> ', movieId);
  // const movieId = searchParams.get('movieId') ?? "";
  
  const [movie, setMovie] = useState({});

  
  const getMovieDetails = async (id) => {
    // set isloading tru
   
        const data = await fetchMovieDetails(id);
        console.log('data :>> ', data);
    
        setMovie(data);
    
    }
  

  useEffect(() => {
    if(!movieId) {
      return;
    }
    getMovieDetails(movieId);
    
    
  }, [movieId]);

  const {original_title, overview, genres, poster_path, vote_average} = movie;

  // const movie = getMovieById(movieId);
  // Стейт, излоадинг, ерорр Делаем запрос, записываем в стейи рендерим нужн разметку
  // useEffect(() => {

  // }, [])

  return (
    
    <>

      {/* <BackLink to={backLinkHref}>Go back</BackLink> */}
      <Link to="/movies">Назад к странице поиска</Link>
      {/* При нажатии на один фильм, открыв страница этого фильма по айди и нужна ссылка, по которой сможем вернуться назада туда, откуда пришли */}

      <img src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `заглушка`
          } alt="poster" />
      <h2>Один обраний фільм {movieId}</h2>
      <p>User score: {}</p>
      <h3>Overview</h3>
      <p>{}</p>
      <h4>Genres</h4>
      <p>{}</p>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet/>
      </div>
    </>
  );
};

export default MovieDetails;
