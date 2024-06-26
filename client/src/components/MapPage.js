// components/MapPage.js
import React from 'react';
import Map from './Map';
import LayerSelection from './LayerSelection';
import AoiSelection from './AoiSelection';
import DateRangeSelection from './DateRangeSelection';
// import Result from './Result';

const MapPage = () => {
  return (
    <div>
      <Map />
      <LayerSelection />
      <AoiSelection />
      <DateRangeSelection />
      {/* <Result /> */}
    </div>
  );
};

export default MapPage;
