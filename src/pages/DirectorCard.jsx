import { useOutletContext , useParams, Link , Outlet } from 'react-router-dom'

function DirectorCard() {
    const directors = useOutletContext()
    const { id } = useParams()
    const director = directors.find((director) => String(director.id) === String(id))

    if (!director) {
        return <h2>Director not found.</h2>
    }

    return (
        <div>
        <h2>{director.name}</h2>
        <p>{director.bio}</p>
        <h3>Movies:</h3>
        <ul>
            {director.movies.map((movie) => (
            <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
            ))}
        </ul>
        <Link to={`movies/new`}>Add New Movie</Link>
        {/* Movie compoenents should render here depending on route */}
        <Outlet context={director}/>

        </div>
    )
}

export default DirectorCard
