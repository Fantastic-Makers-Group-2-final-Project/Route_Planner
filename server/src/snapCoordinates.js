const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDro0XKEZYd8mj42cXWVukmO0WKJstaAYs',
  Promise: Promise
})

const coordsObjectToArray = require('./coordsObjectToArray.js')

async function snapCoordinates(input) {
  googleMapsClient.snapToRoads({
    path: input,
  }).asPromise().then((response) => {
    console.log(response.json.snappedPoints[1].location);
    output = []
    for (i = 0; i < response.json.snappedPoints.length; i++){
      output.push(response.json.snappedPoints[i].location)
    console.log(i)}
    output.push(response.json.snappedPoints[0].location)
    console.log(output)
    return output;
  })
  .catch(err => err);
}

module.exports = snapCoordinates;

// let locations = coordsObjectToArray([ { lat: 51.51787669999999, lng: -0.07620069999995849 },
//   { lat: 51.52581606811841, lng: -0.06343865245844427 },
//   { lat: 51.5337592191676, lng: -0.07620069999995849 },
//   { lat: 51.52581606811841, lng: -0.08896274754147271 }])
