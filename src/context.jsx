import { useState, createContext, useEffect } from 'react';
import nakamuraData from './data/nakamura_1979_sm_locations.json';

export const DataContext = createContext({
  nakamuraEvents: [],
  selectedNakamuraData: [],
  setSelectedNakamuraData: () => {},
});

// eslint-disable-next-line react/prop-types
export function DataContextProvider({ children }) {
  const [nakamuraEvents, setNakamuraEvents] = useState([]);
  const [selectedNakamuraData, setSelectedNakamuraData] = useState([]);

  useEffect(() => {
    setNakamuraEvents(nakamuraData);
  }, []);

  return (
    <DataContext.Provider
      value={{ nakamuraEvents, selectedNakamuraData, setSelectedNakamuraData }}
    >
      {children}
    </DataContext.Provider>
  );
}
