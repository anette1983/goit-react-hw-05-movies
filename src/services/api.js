import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'db7375c0f22b53ce13cc7eb00cc2cfa1';
const trendingOptions = `trending/movie/day?api_key=${API_KEY}`;

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `${trendingOptions}`
  );
return response.data;
};

export const fetchMovieDetails = async (id) => {
    const response = await axios.get(
        `movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      
    return response.data;
}


export const fetchCast = async (id) => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  
return response.data;
}

export const fetchReviews = async (id) => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  
return response.data;
}


export const searchMovies = async (query) => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  
return response.data;
}


