import { Link } from 'react-router-dom'

export default function MoviesList(props) {
    const { movies, favorites, onClick } = props

    const listItems = movies.map(movie => {
        let star = 'star_border'
        const index = favorites.indexOf(movie.id)

        if (index != -1) {
            star = 'star'
        }

        return (
            <li key={movie.id} className="collection-item avatar">
                <Link to={`/movies/${movie.id}`} className="collection-link">
                    <img src="movie.png" alt="movie" className="circle" />
                    <p className="title">{movie.name}</p>
                    <p>Rating: {movie.rating}</p>
                    <p>Genre: {movie.genre}</p>
                </Link>
                <div className="add-favorite secondary-content" onClick={() => onClick(movie.id)}>
                    <i className="material-icons">{star}</i>
                </div>
            </li>
        )
    })

    return (
        <ul className="collection">
            {listItems}
        </ul>
    )
}
