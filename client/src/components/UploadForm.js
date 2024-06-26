import React, { useState } from 'react';
import { createShapefile } from '../services/geoserver';

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('filedata', file);

    try {
      await createShapefile(formData);
      alert('Shapefile uploaded successfully!');
    } catch (error) {
      console.error('Error uploading shapefile:', error);
      alert('Failed to upload shapefile.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload Shapefile</button>
    </form>
  );
};

export default UploadForm;
