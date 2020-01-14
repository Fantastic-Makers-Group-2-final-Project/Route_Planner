const geometry = require('spherical-geometry-js');

// function findCoordinates(startPoint, distance) {
//
//   var distanceInMetres = distance * 1000;
//
//   bearings = [[45, 0, 315], [135, 90, 45], [225, 180, 135], [315, 270, 225]].sample
//
//   var startPointFormatted = geometry.computeOffset(startPoint, 0, 0);
//   var wayPointA = geometry.computeOffset(startPoint, distanceInMetres/4, bearings[0]);
//   var wayPointB = geometry.computeOffset(startPoint, distanceInMetres/2.828, bearings[1]);
//   var wayPointC = geometry.computeOffset(startPoint, distanceInMetres/4, bearings[2]);
//
//   routeCoordinates = [startPointFormatted.toJSON(), wayPointA.toJSON(), wayPointB.toJSON(), wayPointC.toJSON()];
//   return routeCoordinates;
// };
//
// module.exports = findCoordinates;

function findCoordinates(startPoint, distance) {

  var distanceInMetres = distance * 1000;
  const divideFactor = 6.1229488;

  var centrePoint = geometry.computeOffset(startPoint, distanceInMetres/divideFactor, 0)

  var startPointFormatted = geometry.computeOffset(startPoint, 0, 0);
  var wayPointA = geometry.computeOffset(centrePoint, distanceInMetres/divideFactor, 135)
  var wayPointB = geometry.computeOffset(centrePoint, distanceInMetres/divideFactor, 90)
  var wayPointC = geometry.computeOffset(centrePoint, distanceInMetres/divideFactor, 45)
  var wayPointD = geometry.computeOffset(centrePoint, distanceInMetres/divideFactor, 0)
  var wayPointE = geometry.computeOffset(centrePoint, distanceInMetres/divideFactor, 315)
  var wayPointF = geometry.computeOffset(centrePoint, distanceInMetres/divideFactor, 270)
  var wayPointG = geometry.computeOffset(centrePoint, distanceInMetres/divideFactor, 225)

  routeCoordinates = [startPointFormatted.toJSON(), wayPointA.toJSON(), wayPointB.toJSON(), wayPointC.toJSON(), wayPointD.toJSON(), wayPointE.toJSON(), wayPointF.toJSON(), wayPointG.toJSON()];
  return routeCoordinates;

}

module.exports = findCoordinates;
