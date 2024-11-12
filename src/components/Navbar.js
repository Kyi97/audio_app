import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    // Navbar
    <header className="w-full flex justify-between items-center pl-14 pr-14 pt-10">
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-xl" />
        <input type="text" className="outline-none text-sm text-gray-700" />
      </div>
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faBell} className="text-gray-500 text-lg" />
      </div>
    </header>
  );
}

export default Header;
