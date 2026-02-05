import React, { createContext } from "react";

export const NameContext = createContext();

const NameProvider = ({ children }) => {
  const name = "zahid";

  return <NameContext.Provider value={name}>{children}</NameContext.Provider>;
};

export default NameProvider;
