// src/components/LayerSelection.js
import React from 'react';

const LayerSelection = () => {
  return (
    <div>
      <select>
        <option value="ndvi">NDVI</option>
        <option value="ndbi">NDBI</option>
      </select>
    </div>
  );
};

export default LayerSelection;
