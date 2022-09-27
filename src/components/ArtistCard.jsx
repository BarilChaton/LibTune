import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-[250px] p-4 bg-gradient-to-tl from-yellow-100 to-blue-300 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer" onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}>
      <img src={track?.images?.background} alt="artist" className="w-full h-56 rounded-lg" />
      <p className="text-lg font-semibold text-center text-blue-800 mt-4 truncate">{track?.subtitle}</p>
    </div>
  );
};

export default ArtistCard;
