import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMusic,
  faList,
  faHeart,
  faChartLine,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Sidebar() {
  const [activeRoute, setActiveRoute] = useState("/");
  // Items for navigation
  const navItems = [
    { label: "Home", route: "/", icon: faHome },
    { label: "Songs", route: "/songs", icon: faMusic },
    { label: "Playlists", route: "/playlists", icon: faList },
    { label: "Just for You", route: "/just-for-you", icon: faHeart },
    { label: "Top Charts", route: "/top-charts", icon: faChartLine },
  ];

  // Items for playlists
  const playlistItems = [
    { label: "Workout Mix", route: "/playlist/workout-mix", icon: faMusic },
    {
      label: "Chillin' at Home",
      route: "/playlist/chillin-at-home",
      icon: faMusic,
    },
    {
      label: "Booping at Adobe",
      route: "/playlist/booping-at-adobe",
      icon: faMusic,
    },
    { label: "XD 4 Life", route: "/playlist/xd-4-life", icon: faMusic },
  ];

  return (
    <>
      <div className="w-full md:w-1/5 z-50 bg-sidebar text-boldText p-6 h-[87vh] shadow-lg rounded-bl-[3rem] overflow-auto">
        {/* Profile */}
        <div className="flex items-center space-x-2 mb-6 mt-8">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-base font-bold">Kyi Sin</h2>
            <p className="text-xs text-gray-400">Premium</p>
          </div>
        </div>

        {/* Sidebar content */}
        <nav className="mb-8">
          <p className="text-sm font-semibold text-[#ACACAC] mb-4 tracking-wide">
            BROWSE
          </p>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li
                key={item.route}
                className={`flex items-center space-x-4 py-2 transition-colors duration-200 ${
                  activeRoute === item.route
                    ? "text-black"
                    : "text-gray-500 hover:text-[#CF2D83]"
                }`}
                onClick={() => setActiveRoute(item.route)}
              >
                <FontAwesomeIcon icon={item.icon} className="text-sm" />
                <a href={item.route} className="text-[1rem] font-600">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Your Playlists section */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-[#ACACAC] tracking-wide">
              YOUR PLAYLISTS
            </p>
            <button className="flex items-center text-secondary border-2 border-secondary rounded-full w-5 h-5 hover:text-boldText text-sm justify-center">
              <FontAwesomeIcon
                icon={faPlus}
                fontSize={10}
                fontWeight={"bold"}
              />
            </button>
          </div>
          <ul className="space-y-3">
            {playlistItems.map((playlist) => (
              <li
                key={playlist.route}
                className={`flex items-center space-x-4 py-2 rounded transition-colors duration-200 ${
                  activeRoute === playlist.route
                    ? "text-black"
                    : "text-gray-500 hover:text-[#CF2D83]"
                }`}
                onClick={() => setActiveRoute(playlist.route)}
              >
                <FontAwesomeIcon icon={playlist.icon} className="text-sm" />
                <a href={playlist.route} className="text-[1rem] font-600">
                  {playlist.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
