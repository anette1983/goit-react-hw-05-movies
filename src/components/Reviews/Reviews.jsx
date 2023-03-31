const {useParams} = require('react-router-dom');

const Reviews = () => {
    const {movieId} = useParams();
    // прямо тут хттп запрос
    // монтируем компонент, берем инфу из урл, уточняя, для кого брать данные и в юзэффкте запускаем хттп запрос
    return (
        <div>Reviews div: {movieId}</div>
    )
}

export default Reviews;