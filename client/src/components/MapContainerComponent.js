import React from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  WMSTileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapContainerComponent = ({ wmsUrl }) => {
  return (
    <MapContainer
      center={[-6.792539, 110.862339]}
      zoom={11}
      style={{ height: "93.7vh", zIndex: 0, width: "100%" }}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Google Satellite">
          <TileLayer
            url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            attribution='&copy; <a href="https://www.google.com/maps">Google Satellite</a> contributors'
          />
        </LayersControl.BaseLayer>

        {wmstileLayers.map((layer) => (
          <LayersControl.Overlay
            key={layer.name}
            name={layer.name}
            checked={layer.checked}
          >
            <WMSTileLayer
              url={wmsUrl}
              layers={layer.layers}
              format="image/png"
              transparent={true}
              version="1.1.0"
              attribution='&copy; <a href="http://localhost:8080/geoserver">GeoServer</a>'
            />
          </LayersControl.Overlay>
        ))}
      </LayersControl>
    </MapContainer>
  );
};

const wmstileLayers = [
  { name: "Jaringan Jalan", layers: "gis:jalan" },
  { name: "Jaringan Sungai", layers: "gis:sungai_utama" },
  { name: "Admin Desa", layers: "gis:admin_desa_kab_kudus" },
  { name: "Admin Kecamatan", layers: "gis:admin_kec_kab_kudus", checked: true },
  { name: "Admin Kabupaten", layers: "gis:admin_kab_kudus" },
  { name: "Penutup/ Penggunaan Lahan", layers: "gis:pl_kudus" },
  { name: "Bahaya Banjir", layers: "gis:index_banjir", checked: true },
  { name: "Bahaya Banjir Bandang", layers: "gis:indeks_bahaya_BB_kudus" },
  { name: "Bahaya Cuaca Ekstrim", layers: "gis:Indeks_Cueks" },
  { name: "Bahaya Gempa Bumi", layers: "gis:indeks_bahaya_gempabumi" },
  {
    name: "Bahaya Kebakaran Hutan dan Lahan",
    layers: "gis:indeks_bahaya_karhutla",
  },
  { name: "Bahaya Kekeringan", layers: "gis:indeks_bahaya_kekeringan" },
  { name: "Bahaya Tanah Longsor", layers: "gis:Indeks_bahaya_tanah_Longsor" },
  { name: "Bahaya Multi Bencana", layers: "gis:index_bahaya_multi" },
];

export default MapContainerComponent;
