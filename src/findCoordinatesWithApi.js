const geometry = require('spherical-geometry-js');

function findCoordinates(coordinates, distance) {

  var startPoint = new geometry.LatLng(coordinates.lat,coordinates.lng);

  var startPointFormatted = geometry.computeOffset(startPoint, 0, 0);
  var wayPointA = geometry.computeOffset(startPoint, distance/4, 45);
  var wayPointB = geometry.computeOffset(startPoint, distance/2.828, 0);
  var wayPointC = geometry.computeOffset(startPoint, distance/4, 315);

  routeCoordinates = [startPointFormatted.toJSON(), wayPointA.toJSON(), wayPointB.toJSON(), wayPointC.toJSON()];
  return routeCoordinates;
};

module.exports = findCoordinates;
