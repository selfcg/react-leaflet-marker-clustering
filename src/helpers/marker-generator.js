/**
 * MarkerGenerator serves go dynamically generate markers given
 * certain attributes.
 */

class MarkerGenerator {
  /**
   * Generates a number of random markers within a specified bounding box
   * @param {*} amt num of markers to generate
   * @param {*} bounds 2-element array containing northeast and southwest boudning box
   * @returns array of lat/lng coordinates
   */
  static getRandomMarkers(amt, bounds) {
    const markers = [];

    const [southWest, northEast] = bounds;

    for (let i = 0; i < amt; i++) {
      const lat =
        Math.random() * (northEast.lat - southWest.lat) + southWest.lat;
      const lng =
        Math.random() * (northEast.lng - southWest.lng) + southWest.lng;
      markers.push([lat, lng]);
    }

    return markers;
  }
}

export default MarkerGenerator;
