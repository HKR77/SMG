import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPopUpFormOpen, setIsPopUpFormOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("toughened");

  const value = {
    isSidebarOpen,
    setIsSidebarOpen,
    isPopUpFormOpen,
    setIsPopUpFormOpen,
    selectedCategory,
    setSelectedCategory,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
