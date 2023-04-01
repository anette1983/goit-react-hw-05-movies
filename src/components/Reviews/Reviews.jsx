import { useState, useEffect } from 'react';
import { fetchReviews } from 'services/api';
import { StyledUl } from './Reviews.styled';
import Loader from 'components/Loader/Loader';

const { useParams } = require('react-router-dom');

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const getMovieReview = async id => {
    setIsLoading(true);
    try {
      const data = await fetchReviews(id);
      console.log('data :>> ', data);
      if (!data.results.length) {
        throw new Error(`We don't have any reviews for this movie :(`);
      }
      setReviews(data.results);
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
    getMovieReview(movieId);
  }, [movieId]);

  // прямо тут хттп запрос
  // монтируем компонент, берем инфу из урл, уточняя, для кого брать данные и в юзэффкте запускаем хттп запрос
  return (
    <StyledUl>
      {error && <p>{error.message}</p>}
      {isLoading && <Loader />}
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </StyledUl>
  );
};

export default Reviews;
