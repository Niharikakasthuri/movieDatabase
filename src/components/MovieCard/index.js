import {Link} from 'react-router-dom'
import './index.css'
const MovieCard = props => {
  const {movieDetails} = props
  const {id, title, posterPath, voteAverage} = movieDetails

  return (
    <li className="nav-items">
      <img className="image" alt={title} src={posterPath} />
      <div>
        <h1>{title}</h1>
        <p>Rating: {voteAverage}</p>
      </div>
      <Link to={`/movie/${id}`}>
        <button className = "button" type="button">View Details</button>
      </Link>
    </li>
  )
}
export default MovieCard
