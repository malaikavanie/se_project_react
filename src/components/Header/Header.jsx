import "./Header.css";
import logo from "../../assets/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import avatar from "../../assets/Avatar.png";

function Header({ handleAddClick, weatherData }) {
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
      <button
        className="header__add-clothes-button"
        onClick={() => {
          handleAddClick();
          ToggleSwitch();
        }}
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="User Avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
