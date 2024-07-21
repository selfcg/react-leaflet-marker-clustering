import CustomMarkerCluster from './CustomMarkerCluster';
import MarkerGenerator from '../helpers/marker-generator';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { ESRI_WORLDTOPOMAP } from '../assets/basemaps';
import './Map.css';

function TheMap() {
  const MAP_DEFAULTS = {
    startingPos: [29.646, -82.325],
    startinZoom: 6,
  };

  const floridaBounds = [
    { lat: 24.396308, lng: -87.634938 }, //southWest
    { lat: 31.000888, lng: -80.031362 }, //northEast
  ];

  const floridaMarkers = MarkerGenerator.getRandomMarkers(100, floridaBounds);
  return (
    <Map center={MAP_DEFAULTS.startingPos} zoom={MAP_DEFAULTS.startinZoom}>
      <TileLayer
        attribution={ESRI_WORLDTOPOMAP.attribution}
        url={ESRI_WORLDTOPOMAP.url}
      />
      <CustomMarkerCluster>
        {floridaMarkers.map((coords, idx) => {
          return <Marker key={`marker-${idx}`} position={coords} />;
        })}
      </CustomMarkerCluster>
    </Map>
  );
}
export default TheMap;
