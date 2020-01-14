const geometry = require('spherical-geometry-js');

function findCoordinates(startPoint, distance) {

  var distanceInMetres = distance * 1000;

  var startPointFormatted = geometry.computeOffset(startPoint, 0, 0);
  var wayPointA = geometry.computeOffset(startPoint, distanceInMetres/4, 45);
  var wayPointB = geometry.computeOffset(startPoint, distanceInMetres/2.828, 0);
  var wayPointC = geometry.computeOffset(startPoint, distanceInMetres/4, 315);

  routeCoordinates = [startPointFormatted.toJSON(), wayPointA.toJSON(), wayPointB.toJSON(), wayPointC.toJSON()];
  return routeCoordinates;
};

module.exports = findCoordinates;
