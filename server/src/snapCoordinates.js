const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDro0XKEZYd8mj42cXWVukmO0WKJstaAYs',
  Promise: Promise
})

const coordsObjectToArray = require('./coordsObjectToArray.js')

 function snapCoordinates(input) {
  return googleMapsClient.snapToRoads({
    path: input,
  }).asPromise().then((response) => {
    output = []
    for (i = 0; i < response.json.snappedPoints.length; i++){
      output.push(response.json.snappedPoints[i].location)}
    if (output.length > 0) output.push(output[0])
    return output;
  })
  .catch(err => err);
}

module.exports = snapCoordinates;
// snapCoordinates([[51.574427, -0.252669]]).then(data => {
//   console.log(data);
// });
