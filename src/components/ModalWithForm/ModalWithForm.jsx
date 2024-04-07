import { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  formTitle,
  handleCloseClick,
  isOpen,
}) {
  useEffect(() => {
    if (!isOpen) return; // stop the effect not to add the listener if there is no active modal
    const handleClickOutside = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleCloseClick, isOpen]);

  return (
    <div className={`modal${isOpen ? " modal_opened" : ""}`}>
      <div className="modal__container">
        <button
          type="button"
          className="modal__close"
          onClick={handleCloseClick}
        ></button>
        <p className="modal__title">{formTitle}</p>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
