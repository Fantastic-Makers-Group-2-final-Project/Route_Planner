'user strict';

const Geocoder = {};

Geocoder.getCoordinates = async function(postcode) {
    const locator = new google.maps.Geocoder();
    const coords = await new Promise(function(resolve, reject) {
      locator.geocode({ 'address': postcode }, function(results, status) {
        resolve(results);
      })
    })

    return { lat: coords[0].geometry.location.lat(), lng: coords[0].geometry.location.lng() }
  }
