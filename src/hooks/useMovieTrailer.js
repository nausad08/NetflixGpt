import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailorVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";


const useMovieTrailer = (movieId) =>{

    const dispatch = useDispatch();

    const trailorVideo = useSelector((store)=>store.movies.trailorVideo)

    // const [trailorId,setTrailorId] = useState(null)
    // fetch trailor video && updating the store with traler vedio

    const getMoviesVideos = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId+'/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        // console.log(json);
        const filterData = json.results.filter((video)=>video.type ==="Trailer");
        const trailor= filterData.length ? filterData[0] : json.results[0]
        // console.log(trailor)
        dispatch(addTrailorVideo(trailor));
      }
    
      useEffect(()=>{
       !trailorVideo && getMoviesVideos();
    
      },[])
      
    
}
export default useMovieTrailer;