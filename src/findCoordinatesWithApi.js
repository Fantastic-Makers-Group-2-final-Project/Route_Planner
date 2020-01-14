const geometry = require('spherical-geometry-js');

function findCoordinates(startPoint, distance) {

  var distanceInMetres = distance * 1000;

  bearings = [[45, 0, 315], [135, 90, 45], [225, 180, 135], [315, 270, 225]].sample

  var startPointFormatted = geometry.computeOffset(startPoint, 0, 0);
  var wayPointA = geometry.computeOffset(startPoint, distanceInMetres/4, bearings[0]);
  var wayPointB = geometry.computeOffset(startPoint, distanceInMetres/2.828, bearings[1]);
  var wayPointC = geometry.computeOffset(startPoint, distanceInMetres/4, bearings[2]);

  routeCoordinates = [startPointFormatted.toJSON(), wayPointA.toJSON(), wayPointB.toJSON(), wayPointC.toJSON()];
  return routeCoordinates;
};

module.exports = findCoordinates;
