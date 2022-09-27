import { CgPlayButtonO, CgPlayPauseO } from "react-icons/cg";

const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => (isPlaying && activeSong?.title === song.title ? (
  <CgPlayPauseO 
    size={50}
    className='text-yellow-200 bg-blue-700 p-2 rounded-lg'
    onClick={handlePause}
  />
) : (
  <CgPlayButtonO 
    size={50}
    className='text-yellow-200 bg-blue-700 p-2 rounded-lg'
    onClick={handlePlay}
  />
));

export default PlayPause;
