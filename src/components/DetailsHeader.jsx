import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {

  const artist = artistData?.artists[artistId]?.attributes;
return (
  <div className="relative w-full flex flex-col mt-10">
    <div className="w-full bg-gradient-to-l from-transparent to-blue-500 sm:h-48 h-28 rounded-l-xl mb-[5em]" />
    <div className="absolute flex items-center">
      <img 
        src={artistId ? artist.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart} 
        alt="art"
        className="sm:w-52 w-32 sm:h-52 h-32 rounded-full object-overflow shadow-md shadow-blue-500"
      />
      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-yellow-200">{artistId ? artist?.name : songData?.title}</p>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
            <p className="text-base text-yellow-200 mt-2">{songData?.subtitle}</p>
          </Link>
        )}
        <p className="text-base text-yellow-200 mt-2">
          {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
        </p>
      </div>
    </div>
  </div>
)
}

export default DetailsHeader;
