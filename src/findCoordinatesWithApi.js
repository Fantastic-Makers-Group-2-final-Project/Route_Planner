const geometry = require('spherical-geometry-js');

function findCoordinates(startPoint, distance) {

  var distanceInMetres = distance * 1000;
  const divideFactor = 6.1229488;
  const offsetFactor = 0.7303821338
  var offsetDistance = distanceInMetres * offsetFactor;

  var centrePoint = geometry.computeOffset(startPoint, offsetDistance/divideFactor, 0)

  var startPointFormatted = geometry.computeOffset(startPoint, 0, 0);
  var wayPointA = geometry.computeOffset(centrePoint, offsetDistance/divideFactor, 135)
  var wayPointB = geometry.computeOffset(centrePoint, offsetDistance/divideFactor, 90)
  var wayPointC = geometry.computeOffset(centrePoint, offsetDistance/divideFactor, 45)
  var wayPointD = geometry.computeOffset(centrePoint, offsetDistance/divideFactor, 0)
  var wayPointE = geometry.computeOffset(centrePoint, offsetDistance/divideFactor, 315)
  var wayPointF = geometry.computeOffset(centrePoint, offsetDistance/divideFactor, 270)
  var wayPointG = geometry.computeOffset(centrePoint, offsetDistance/divideFactor, 225)

  routeCoordinates = [startPointFormatted.toJSON(), wayPointA.toJSON(), wayPointB.toJSON(), wayPointC.toJSON(), wayPointD.toJSON(), wayPointE.toJSON(), wayPointF.toJSON(), wayPointG.toJSON()];
  return routeCoordinates;

}

module.exports = findCoordinates;
