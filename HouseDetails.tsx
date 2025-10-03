import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';

export const HouseDetails = () => {
  const context = useContext(HouseContext);
  if (!context) return null;

  const { selectedHouse } = context;

  return (
    <div>
      <h3>House Details</h3>
      {selectedHouse ? (
        <ul>
          <li>Address: {selectedHouse.address}</li>
          <li>Price: ${selectedHouse.price}</li>
          <li>Rooms: {selectedHouse.rooms}</li>
        </ul>
      ) : (
        <p>No house selected.</p>
      )}
    </div>
  );
};
