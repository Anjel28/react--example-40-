import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';
import { House } from './types';

const houses: House[] = [
  { id: 1, address: '123 Main St', price: 250000, rooms: 3 },
  { id: 2, address: '456 Oak Ave', price: 320000, rooms: 4 },
];

export const HouseSelector = () => {
  const context = useContext(HouseContext);
  if (!context) return null;

  const { setSelectedHouse } = context;

  return (
    <div>
      <h3>Select a House</h3>
      {houses.map((house) => (
        <button key={house.id} onClick={() => setSelectedHouse(house)}>
          {house.address}
        </button>
      ))}
    </div>
  );
};
