const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDro0XKEZYd8mj42cXWVukmO0WKJstaAYs'
});

googleMapsClient.geocode({
  address: '50 Commercial Street, London, E1 6LT'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});
