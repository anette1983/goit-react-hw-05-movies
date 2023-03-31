import { useState, useEffect } from "react";
import {Link, useSearchParams} from 'react-router-dom';
import { fetchTrendingMovies } from "services/api";

 const Home = () => {
    const [movies, setMovies] = useState([]);
   
    
    const getTrendingMovies = async () => {
        // set isloading tru
       
            const data = await fetchTrendingMovies();
        
            setMovies(data.results);
        
        }

    useEffect(()=> {
        
        getTrendingMovies();    

    }, [])
    return (
        <main>
    <ul>
      {movies.map(({original_title, name, id})=> (
        <li key={id}><Link to={`/movies/${id}`}>{original_title || name}</Link></li>
      ))}
    </ul>
        </main>
    )
}

export default Home;