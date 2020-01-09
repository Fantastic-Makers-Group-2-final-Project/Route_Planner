const geometry = require('spherical-geometry-js');

function findCoordinates(coordinates, distance) {
  var startPoint = new geometry.LatLng(coordinates[0], coordinates[1]);
  var heading = 0;

  var endPoint = geometry.computeOffset(startPoint, distance, heading);
  return endPoint.toJSON();
};

module.exports = findCoordinates;
