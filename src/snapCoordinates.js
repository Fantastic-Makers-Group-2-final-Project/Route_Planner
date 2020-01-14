const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDro0XKEZYd8mj42cXWVukmO0WKJstaAYs',
  Promise: Promise
})

 async function snapCoordinates(input) {
  return googleMapsClient.snapToRoads({
    path: input,
  }).asPromise().then((response) => {
    waypoints = []
    for (i = 0; i < response.json.snappedPoints.length; i++){
      waypoints.push({
        lat: response.json.snappedPoints[i].location.latitude,
        lng: response.json.snappedPoints[i].location.longitude
      });
    }
    
    if (waypoints.length > 0){ 
      waypoints.push(waypoints[0])
    }

    return waypoints;
  })
  .catch(err => err);
}

module.exports = snapCoordinates;
