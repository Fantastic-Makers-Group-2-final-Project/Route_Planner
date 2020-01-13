const geometry = require('spherical-geometry-js');

function findCoordinates(startPoint, distance) {

  var startPointFormatted = geometry.computeOffset(startPoint, 0, 0);
  var wayPointA = geometry.computeOffset(startPoint, distance/4, 45);
  var wayPointB = geometry.computeOffset(startPoint, distance/2.828, 0);
  var wayPointC = geometry.computeOffset(startPoint, distance/4, 315);

  routeCoordinates = [startPointFormatted.toJSON(), wayPointA.toJSON(), wayPointB.toJSON(), wayPointC.toJSON()];
  return routeCoordinates;
};

module.exports = findCoordinates;