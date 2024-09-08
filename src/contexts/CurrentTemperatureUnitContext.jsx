import React, { createContext, useState } from "react";

export const CurrentTemperatureUnitContext = createContext();

export function CurrentTemperatureUnitProvider({ children }) {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prevState) => (prevState === "F" ? "C" : "F"));
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      {children}
    </CurrentTemperatureUnitContext.Provider>
  );
}
export default CurrentTemperatureUnitContext;
