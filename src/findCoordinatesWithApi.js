const geometry = require('spherical-geometry-js');

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
