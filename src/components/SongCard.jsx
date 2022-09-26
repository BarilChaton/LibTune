import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i }) => {
  const activeSong = 'Test';
  return (
  <div className="flex flex-col w-[250px] p-4 bg-gradient-to-tl from-yellow-100 to-blue-300 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer outline-none shadow-md">
    <div className='relative w-full h-56 group'>
      <div className={`absolute inset-0 justify-center items-center bg-blue-600 bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-blue-600 bg-opacity-70' : 'hidden'}`}>
        <PlayPause />
      </div>
      <img src={song.images?.coverart} alt="song_img" />
    </div>
  </div>
)};

export default SongCard;
