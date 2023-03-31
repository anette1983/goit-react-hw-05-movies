import {useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';

// монтируем страницу коллекции, делаем хттп запрос по квери, рисуем по результатам список и кажд оборач в линк
// Коллекция хранится в стейте, а фильтр – в строке
// И мы можем использ значение параметра из строки и наш массив, чтобы отфильтр только те, ке подходят под условия
// в юз эффект делаем запрос по квери и запис результат в стейт

const Movies = () => {
    // const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get('movieId') ?? "";

    const updateQueryString = (evt) => {
        if (evt.target.value === "") {
            return setSearchParams({});
        
        }
        return setSearchParams({movieId: evt.target.value});

    }



    // додати стейт, обробку помилок (порівняти з зображеннями)

    // const [photos, setPhotos] = useState([]);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     if (!searchQuery) {
    //       return;
    //     }
    //     getPhotos(searchQuery, page);
    //     //  scrollToNextPage();
    //   }, [searchQuery, page]);
    
    //   const handleSearchSubmit = query => {
    //     if (searchQuery === query) {
    //       return;
    //     }
    
    //     setSearchQuery(query);
    //     setIsVisible(false);
    //     setPhotos([]);
    //     setPage(1);
    //   };
    
    return (
        <>
        <form action="">
            <input type="text" value={movieId} onChange={updateQueryString}/>
            <button type="submit"></button>
        </form>
        <ul>
            {/* мепаем полученные мувиз */}
            {['movie-1', 'movie-2', 'movie-3'].map((movie)=> {
                return  <Link key={movie} to={`${movieId}`}>{movie}</Link>;
            })}
           
        </ul>
        {/* <ul>
            <li>Тут будет список найденных фильмов по запросу</li>
        </ul> */}
        </>
    )
}

export default Movies;


// {/* <Css.StyledForm onSubmit={handleSubmit}>
//         <Css.SearchButton type="submit">
//           <span>
//             <BiSearch />
//           </span>

//           {/* <span>
//               <BiSearch width="15" height="15"/>
//             </span> */}
//         </Css.SearchButton>

//         <input
//           onChange={handleQueryChange}
//           type="text"
//           value={searchQuery}
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//       </Css.StyledForm>
//     </Css.StyledSearchbar>
//   ); */}
// };