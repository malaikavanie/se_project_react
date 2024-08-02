import React from "react";

export const ContextTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});
