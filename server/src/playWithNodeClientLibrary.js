const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDro0XKEZYd8mj42cXWVukmO0WKJstaAYs',
  Promise: Promise
});

googleMapsClient.snapToRoads({
  path: [
    [51.5178767,-0.0762007]
  ],
}).asPromise().then((response) => {
  console.log(response.json.snappedPoints)
})
.catch(err => console.log(err));
