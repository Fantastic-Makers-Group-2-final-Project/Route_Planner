describe('Geocoder', function () {
var expect = (typeof require === 'undefined') ? chai.expect : require('chai').expect;

  it('returns an expected lat for a known postcode', function() {
  var geocoder = new google.maps.Geocoder();
  var address = "RH2 9BG"
  geocoder.geocode( { 'address': address}, function(results, status){
  var latitude = results[0].geometry.location.lat();
  console.log(latitude);
  expect(latitude).equal(51.2379692)});
  // should(latitude).equal.exactly(51.2379692)});
  })
  it('returns an expected long for a known postcode', function() {
  var geocoder = new google.maps.Geocoder();
  var address = "RH2 9BG"
  geocoder.geocode( { 'address': address}, function(results, status){
  var longitude = results[0].geometry.location.lng();
  console.log(longitude);
  expect(longitude).equal(-0.20605449999993652)});
  // should(latitude).equal.exactly(51.2379692)});
  })
});
