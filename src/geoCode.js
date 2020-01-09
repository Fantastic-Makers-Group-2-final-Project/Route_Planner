"use strict"

// function Geocode(input){
//   var locator = new google.maps.Geocoder();
//   geocoder.geocode( { 'address': input}, function(results, status){
//   const latitude = results[0].geometry.location.lat();
//   return (latitude)
// }


function Geocode(input) {
  this.input = input
  let locator = new google.maps.Geocoder();
  locator.geocode( { 'address': this.input }, function (results, status) {
    this.latitude = results[0].geometry.location.lat();
    console.log(this.latitude)
  });
}

Geocode.prototype.latitude = function() {
  // console.log(this.latitude)
  return this.latitude;
}
