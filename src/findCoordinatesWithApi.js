const geometry = require('spherical-geometry-js');

function findCoordinates(startPoint, distance) {

  var distanceInMetres = distance * 1000;
  const offsetRatio = 0.7447848268;
  var offsetDistance = distanceInMetres * offsetRatio;

  var bearingsOptions = [[45, 0, 315], [135, 90, 45], [225, 180, 135], [315, 270, 225]]
  var bearingsIndex = chooseBearings();
  var bearings = bearingsOptions[bearingsIndex];

  var startPointFormatted = geometry.computeOffset(startPoint, 0, 0);
  var wayPointA = geometry.computeOffset(startPoint, offsetDistance/4, bearings[0]);
  var wayPointB = geometry.computeOffset(startPoint, offsetDistance/2.828, bearings[1]);
  var wayPointC = geometry.computeOffset(startPoint, offsetDistance/4, bearings[2]);

  var routeCoordinates = [startPointFormatted.toJSON(), wayPointA.toJSON(), wayPointB.toJSON(), wayPointC.toJSON()];
  return routeCoordinates;
};

// module.exports = findCoordinates;

function chooseBearings(){
  var bearingsIndex = Math.floor (Math.random() * 4);

  return bearingsIndex;
}
console.log(findCoordinates({lat: 51.5178767, lng: -0.0762007}, 5));
