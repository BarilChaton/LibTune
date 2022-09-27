import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-blue-700 text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5 bg-yellow-200 rounded-lg p-5 w-[400px]">
          {songData?.sections[1].type === 'LYRICS' ? songData?.sections[1].text.map((line, i) => (
            <p className='text-blue-700 text-base my-1'>{line}</p>
          )) : <p className='text-blue-700 text-base my-1'>Sorry, no lyrics found!</p>}
        </div>
      </div>
    </div>
  );
};
export default SongDetails;
