import axios from 'axios';
import { Tile as TileLayer } from 'ol/layer';
import TileWMS from 'ol/source/TileWMS';

const GEOSERVER_URL = 'http://localhost:8080/geoserver/your_workspace/wms';

export const useGeoserverData = (map) => {
  const wmsLayer = new TileLayer({
    source: new TileWMS({
      url: GEOSERVER_URL,
      params: { 'LAYERS': 'your_layer_name', 'TILED': true },
      serverType: 'geoserver',
    })
  });

  map.addLayer(wmsLayer);
};

export const createShapefile = async (formData) => {
  return axios.post(`${GEOSERVER_URL}/rest/workspaces/your_workspace/datastores/your_datastore/file.shp`, formData, {
    headers: {
      'Content-Type': 'application/zip',
    }
  });
};

export const deleteShapefile = async (layerName) => {
  return axios.delete(`${GEOSERVER_URL}/rest/layers/your_workspace:${layerName}`);
};
