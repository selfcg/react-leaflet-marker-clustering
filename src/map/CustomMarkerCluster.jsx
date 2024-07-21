import L, { marker } from 'leaflet';
import { useEffect } from 'react';

require('leaflet.markercluster');

/**
 *
 * @param {*} children should be a collection of react-leaflet markers
 * @returns
 */
function CustomMarkerCluster({ children }) {
  const map = useLeaflet();

  useEffect(() => {
    const markerClusterGroup = L.markerClusterGroup();

    //get the position and other props of children
    React.Children.forEach((markerComponent) => {
      //validate that we are indeed working with marker components
    });

    map.addLayer(markerClusterGroup);
  }, [map, children]);
  const markerClusterGroup = new L.markerClusterGroup();

  return null;
}
export default CustomMarkerCluster;
