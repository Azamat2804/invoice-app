import { createContext, useState } from "react";

export const OpenContext = createContext({
  showForm: false,
  setShowForm: () => Boolean,
  showFilter: false,
  setShowFilter: () => Boolean,
  showAddItem: false,
  setShowAddItem: () => Boolean,
});

export const OpenContextProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);
  const value = {
    showFilter,
    setShowFilter,
    showForm,
    setShowForm,
    showAddItem,
    setShowAddItem,
  };
  return <OpenContext.Provider value={value}>{children}</OpenContext.Provider>;
};
