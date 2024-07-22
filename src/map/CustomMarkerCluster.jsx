import React, { useEffect } from 'react';
import Validator from '../helpers/validator';
import L, { marker, useLeaflet } from 'leaflet';
import { Marker, withLeaflet } from 'react-leaflet';

import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

/**
 *
 * @param {*} children should be a collection of react-leaflet markers
 * @returns
 */
function CustomMarkerCluster({ leaflet, children }) {
  //make sure we are using Markers
  Validator.validateChildren(
    children,
    Marker,
    'CustomMakerCluster component expects to recieve React Leaflet <Marker> components'
  );

  useEffect(() => {
    const markerClusterGroup = new L.markerClusterGroup();
    //Ensure props and other children are maintained
    React.Children.forEach(children, (markerComponent) => {
      if (markerComponent && markerComponent.props.position) {
        const marker = L.marker(markerComponent.props.position, {
          ...markerComponent.props,
        });

        //Probably need to make this more robust
        if (markerComponent.props.children) {
          marker.bindPopup(markerComponent.props.children.props.children); //gross
        }

        markerClusterGroup.addLayer(marker);
      } else {
        console.error(
          'Could not convert react Marker component to leaflet marker'
        );
      }
      //Extract coordinate props from markerComponent
    });

    leaflet.map.addLayer(markerClusterGroup);

    //cleanup time
    return () => {
      leaflet.map.removeLayer(markerClusterGroup);
    };
  }, [leaflet.map, children]);

  return null;
}
export default withLeaflet(CustomMarkerCluster);
