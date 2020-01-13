const findCoordinatesWithApi = require('./findCoordinatesWithApi');
const coordsObjectToArray = require('./coordsObjectToArray');
const snapCoordinates = require('./snapCoordinates');

async function findAndSnapCoords(startPoint, distance) {
  var distanceInMetres = distance * 1000;
  var newCoordinates = findCoordinatesWithApi(startPoint, distanceInMetres);
  var convertedCoords = coordsObjectToArray(newCoordinates);
  
  return await snapCoordinates(convertedCoords);
}

module.exports = findAndSnapCoords;
