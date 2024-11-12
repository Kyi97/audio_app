import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
  faRandom,
  faRedo,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

function Footer({ currentTrack, isPlaying, playTrack }) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#E0297D] p-4 pt-40 pb-7 flex items-center justify-between text-white">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center"></div>
        <div>
          {currentTrack ? (
            <>
              <p className="font-semibold">{currentTrack.title}</p>
              <p className="text-sm text-gray-200">{currentTrack.artist}</p>
            </>
          ) : (
            <p className="text-sm text-gray-200">No song playing</p>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faRandom} className="hover:text-gray-300" />
        <FontAwesomeIcon icon={faBackward} className="hover:text-gray-300" />
        <button
          className="bg-white text-pink-500 border-2 border-white rounded-full w-12 h-12 flex items-center justify-center p-0"
          onClick={() => playTrack(currentTrack)} // Play/Pause current track
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} fontSize={20} />
        </button>
        <FontAwesomeIcon icon={faForward} className="hover:text-gray-300" />
        <FontAwesomeIcon icon={faRedo} className="hover:text-gray-300" />
      </div>

      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faVolumeUp} />
        <input type="range" className="w-24" />
      </div>
    </div>
  );
}

export default Footer;
