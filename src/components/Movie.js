export default function Movie(props) {
    const { movie } = props

    return (
        <div>
            <h1>{movie.name}</h1>
            <p><b>Rating:</b> {movie.rating}</p>
            <p><b>Genre:</b> {movie.genre}</p>
            <p><b>Release date:</b> {movie.releaseDate.toLocaleDateString()}</p>
            <p><b>Synopsis:</b> {movie.synopsis}</p>
        </div>
    )
}
