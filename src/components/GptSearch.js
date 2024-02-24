import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10  ' >
            <img className="h-screen object-cover  md:w-screen md:h-[1000px] " src={BG_URL} alt='bg-img'  />

      </div>
      <div className=''>
      <GptSearchBar/>
      <GptMovieSuggestion/>
      </div>
    </>
  )
}

export default GptSearch
