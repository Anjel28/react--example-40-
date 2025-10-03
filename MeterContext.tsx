// MeterContext.tsx
import React, { createContext, useState } from 'react';

type MeterContextType = {
  reading: number;
  updateReading: (value: number) => void;
};

export const MeterContext = createContext<MeterContextType | undefined>(undefined);

 const MeterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reading, setReading] = useState<number>(0);

  const updateReading = (value: number) => {
    setReading(value);
  };

  return (
    <MeterContext.Provider value={{ reading, updateReading }}>
      {children}
    </MeterContext.Provider>
  );

};

export default MeterProvider;
