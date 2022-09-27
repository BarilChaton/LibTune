import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-gradient-to-tl from-yellow-100 to-blue-300 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer outline-none shadow-md">
      <div className="relative w-full h-54 group">
        <div className={`absolute inset-0 justify-center rounded-lg items-center bg-yellow-200 bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-blue-600 bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song.images?.coverart} alt="song_img" className="rounded-lg" />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-blue-700 truncate">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm truncate text-blue-800 mt-1">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
