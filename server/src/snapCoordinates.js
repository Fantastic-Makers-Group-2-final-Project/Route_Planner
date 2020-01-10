const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDro0XKEZYd8mj42cXWVukmO0WKJstaAYs'
})

const RoadSnap = {};

RoadSnap.snapCoordinates = async function([lat, lng]) {
  // const coordsSnapper = googleMapsClient.snapToRoads();
  const snappedCoords = await new Promise(function(resolve, reject) {
    googleMapsClient.snapToRoads({ path: [lat, lng] }, function(results, status) {
      resolve(results);
    })
  })
}

module.exports = RoadSnap.snapCoordinates;
