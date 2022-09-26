import { CgPlayButtonO, CgPlayPauseO } from "react-icons/cg";

const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => (isPlaying && activeSong?.title === song.title ? (
  <CgPlayPauseO 
    size={100}
    className='text-white'
    onClick={handlePause}
  />
) : (
  <CgPlayButtonO 
    size={100}
    className='text-white'
    onClick={handlePlay}
  />
));

export default PlayPause;
