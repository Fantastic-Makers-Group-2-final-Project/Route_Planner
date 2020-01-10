const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDro0XKEZYd8mj42cXWVukmO0WKJstaAYs',
  Promise: Promise
})

async function snapCoordinates([lat, lng]) {
  googleMapsClient.snapToRoads({
    path: [
      [lat, lng]
    ],
  }).asPromise().then((response) => {
    console.log(response.json.snappedPoints[0].location);
    return response.json.snappedPoints[0].location;
  })
  .catch(err => err);
}

module.exports = snapCoordinates;
