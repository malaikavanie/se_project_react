import "./ItemModal.css";
import { useEffect } from "react";

export default function ItemModal({ card, handleCloseClick, isOpen }) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseClick();
      }
      if (!isOpen) return; // stop the effect not to add the listener if there is no active modal
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleCloseClick, isOpen]);

  return (
    <div className={`modal${isOpen ? " modal_opened" : ""}`}>
      <div className="modal__container modal__container_type_image">
        <button
          type="button"
          className="modal__close"
          onClick={handleCloseClick}
        />
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__information">
          <p className="modal__information-title">{card.name}</p>
          <p className="modal__information-weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}
