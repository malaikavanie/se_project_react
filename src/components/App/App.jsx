import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import DeleteConfirmationModal from "../ConfirmationModal/DeleteConfirmationModal";
import Profile from "../Profile/Profile";

//styles
import "./App.css";

//constants
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { getItems, addItem, deleteItem } from "../../utils/api";
import { apiKey, coordinates } from "../../utils/constants";

//contexts
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setActiveModal("card-preview");
    setSelectedCard(card);
  };

  const handleCardDeleteClick = () => {
    setActiveModal("delete-confirmation");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleAddSubmit = ({ name, weatherType, imageUrl }) => {
    addItem(name, weatherType, imageUrl)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleCardDelete = (card) => {
    console.log(card);
    deleteItem(card._id)
      .then(() => {
        setClothingItems((currentItems) =>
          currentItems.filter((item) => item._id !== card._id)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data.reverse());
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.key === "Escape") {
        closeActiveModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains("modal")) {
        closeActiveModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header
            toggleMobileMenu={toggleMobileMenu}
            isMobileMenuOpen={isMobileMenuOpen}
            handleAddClick={handleAddClick}
            weatherData={weatherData}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleAddClick={handleAddClick}
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          handleCloseClick={closeActiveModal}
          isOpen={activeModal === "add-garment"}
          onAddSubmit={handleAddSubmit}
        />
        <ItemModal
          card={selectedCard}
          handleCloseClick={closeActiveModal}
          isOpen={activeModal === "card-preview"}
          onDeleteClick={handleCardDeleteClick}
        />
        <DeleteConfirmationModal
          handleCloseClick={closeActiveModal}
          isOpen={activeModal === "delete-confirmation"}
          card={selectedCard}
          handleCardDelete={handleCardDelete}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
