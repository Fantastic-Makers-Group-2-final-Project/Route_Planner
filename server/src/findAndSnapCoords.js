const findCoordinatesWithApi = require('./findCoordinatesWithApi');
const coordsObjectToArray = require('./coordsObjectToArray');
const snapCoordinates = require('./snapCoordinates');

function findAndSnapCoords(startPoint, distance) {
  var distanceInMetres = distance * 1000;

  var newCoordinates = findCoordinatesWithApi(startPoint, distanceInMetres);

  var convertedCoords = coordsObjectToArray(newCoordinates);

  var snappedCoords = snapCoordinates(convertedCoords).then(data => {
    return data;
  });
  return snappedCoords;


}

module.exports = findAndSnapCoords;
