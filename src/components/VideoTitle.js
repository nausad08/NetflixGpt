
const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[16%] px-0 md:px-24 absolute text-white bg-gradient-to-r from-black flex flex-col ">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block  py-4 text-md w-1/3">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-1 md:py-2 px-3 md:px-10 text-xl rounded-md hover:bg-opacity-80">
          ▷ Play</button>
        <button className="hidden md:inline-block mx-2 bg-white text-black py-2 px-10 text-xl rounded-md hover:bg-opacity-80">
          More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
