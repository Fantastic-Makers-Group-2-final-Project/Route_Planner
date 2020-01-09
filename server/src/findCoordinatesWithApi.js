const geometry = require('spherical-geometry-js');

function findCoordinates() {
  var startPoint = new geometry.LatLng(0,0);
  var distance = 0;
  var heading = 0;

  var endPoint = geometry.computeOffset(startPoint, distance, heading);
  return endPoint.toJSON();
};

module.exports = findCoordinates;
