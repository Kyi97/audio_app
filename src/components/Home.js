import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faHeart,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

function Home() {
  const [recentTracks, setRecentTracks] = useState([]);
  const [recommendationTracks, setRecommendationTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const audioPlayer = new Audio();

  useEffect(() => {
    // Fetch recent tracks
    fetch("https://www.theaudiodb.com/api/v1/json/2/track.php?m=2115888")
      .then((response) => response.json())
      .then((data) => {
        if (data.track) {
          const tracks = data.track.slice(0, 4).map((track) => ({
            title: track.strTrack,
            artist: track.strArtist,
            duration: track.intDuration
              ? formatDuration(track.intDuration)
              : "N/A",
            audioUrl: track.strMusicVid,
          }));
          setRecentTracks(tracks);
        }
      });

    // Fetch recommended tracks
    fetch("https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024")
      .then((response) => response.json())
      .then((data) => {
        if (data.album) {
          const recommendations = data.album.slice(0, 3).map((album) => ({
            title: album.strAlbum,
            artist: album.strArtist,
          }));
          setRecommendationTracks(recommendations);
        }
      })
      .catch((error) =>
        console.error("Error fetching recommended tracks:", error)
      );
    return () => {
      audioPlayer.pause();
    };
  }, []);

  const formatDuration = (durationMs) => {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = ((durationMs % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const playTrack = (track) => {
    if (currentTrack?.title === track.title && isPlaying) {
      audioPlayer.pause();
      setIsPlaying(false);
    } else {
      if (currentTrack?.title !== track.title) {
        setCurrentTrack(track);
      }
      audioPlayer.play();
      setIsPlaying(true);
      setSelectedTrack(track);
    }
  };

  audioPlayer.onended = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <div className="flex-1 z-40 pt-6 pb-6 pl-4 md:pl-14 bg-white shadow-lg rounded-br-[3rem]  overflow-hidden">
        {/* Ads Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-10 mb-8">
          <div className="md:col-span-3 h-48 md:h-[18rem] bg-gradient-to-b from-[#E33A7F] to-[#B91F89] rounded-3xl flex flex-col items-left justify-top text-white custom-font-div text-5xl md:text-7xl p-4 md:p-6 relative">
            GET LOST
            <span className="text-xl md:text-3xl font-normal text-[#E572A7]">
              in your music.
            </span>
            <button className="absolute bottom-4 left-4 text-pink-500 border-2 border-white rounded-full w-8 h-8 flex items-center justify-center p-0">
              <FontAwesomeIcon icon={faPlay} fontSize={15} color="white" />
            </button>
          </div>
          <div className="md:col-span-2 h-48 md:h-[18rem] bg-gradient-to-b from-blue-300 to-[#1961CB] rounded-l-3xl flex flex-col items-left justify-top p-4 md:p-6 text-white custom-font-div text-5xl md:text-7xl relative">
            MELLOW
            <span className="text-xl md:text-3xl font-normal text-[#8BBEF9]">
              beats.
            </span>
            <button className="absolute bottom-4 left-4 text-blue-500 border-2 border-white rounded-full w-8 h-8 flex items-center justify-center p-0">
              <FontAwesomeIcon icon={faPlay} fontSize={15} color="white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {/* Recently Played Section */}
          <section>
            <h2 className="text-lg font-300 mb-4">Recently Played</h2>
            <ul className="space-y-2 ml-[-1rem] md:ml-[-2rem] cursor-pointer">
              {recentTracks.map((track, index) => (
                <li
                  key={index}
                  className={`grid grid-cols-6 items-center p-2 gap-2 md:gap-4 ${
                    selectedTrack === track ? "bg-pink-100" : ""
                  }`}
                  onClick={() => playTrack(track)}
                >
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center text-white"></div>
                  </div>
                  <div className="text-xs font-300">{track.title}</div>
                  <div className="text-xs text-gray-500">{track.artist}</div>
                  <div className="text-xs text-gray-500">{track.duration}</div>
                  <div className="flex items-center justify-center">
                    <button className="text-gray-400 hover:text-pink-500">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="text-gray-400 hover:text-pink-500">
                      <FontAwesomeIcon icon={faEllipsisH} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Recommended Section*/}
          <section className="hidden md:block">
            <h2 className="text-lg font-semibold mb-4 ml-5">
              Recommended For You
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {recommendationTracks.map((recommendation, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-gray-700"
                >
                  <div className="h-16 w-16 lg:h-32 lg:w-32 bg-gray-200 rounded-lg flex flex-col items-center justify-center text-center"></div>
                  <p className="text-sm font-semibold mt-2">
                    {recommendation.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {recommendation.artist}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        playTrack={playTrack}
        className="z-0"
      />
    </>
  );
}

export default Home;
