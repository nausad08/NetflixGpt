
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)

  return movies.nowPlayingMovies && (
    <div className='bg-black w-screen '>
     <div className='mt-0 md:-mt-48 relative  pl-4 md:pl-12 z-20'>
      <MovieList title={"Now Playing"}  movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"}  movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"}  movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"}  movies={movies.upcomingMovies}/>
      <MovieList title={"Horror"}  movies={movies.nowPlayingMovies}/>
      <MovieList title={"Entertainment"}  movies={movies.nowPlayingMovies}/>
      
     </div>
    </div>
  )
}

export default SecondaryContainer


/*Movielist-propuker
     -- moviecard
 MovieList-NowPlayinng
 movieList-Tranding
 MovieList - Horor
 */