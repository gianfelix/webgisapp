import React, { useState } from 'react';
import { deleteShapefile } from '../services/geoserver';

const DeleteForm = () => {
  const [layerName, setLayerName] = useState('');

  const handleInputChange = (event) => {
    setLayerName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await deleteShapefile(layerName);
      alert('Shapefile deleted successfully!');
    } catch (error) {
      console.error('Error deleting shapefile:', error);
      alert('Failed to delete shapefile.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={layerName}
        onChange={handleInputChange}
        placeholder="Enter layer name to delete"
      />
      <button type="submit">Delete Shapefile</button>
    </form>
  );
};

export default DeleteForm;
