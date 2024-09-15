import "./Header.css";
import logo from "../../assets/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import avatar from "../../assets/Avatar.png";

function Header({ handleToggleSwitch, handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={logo} alt="WTWR Logo" className="header__logo" />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />

      <button
        className="header__add-clothes-button"
        onClick={() => {
          handleAddClick();
          toggleMobileMenu();
        }}
      >
        + Add clothes
      </button>

      <div className="header__user-container">
        <p className="header__username">Malaika Vanie</p>
        <img src={avatar} alt="User Avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
