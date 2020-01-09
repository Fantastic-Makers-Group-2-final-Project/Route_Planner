"use strict"

// function Geocode(input){
//   var locator = new google.maps.Geocoder();
//   geocoder.geocode( { 'address': input}, function(results, status){
//   const latitude = results[0].geometry.location.lat();
//   return (latitude)
// }




function Geocode(input){
  this.input = input
  var locator = new google.maps.Geocoder();
  locator.geocode( {'address': this.input}, function (results, status){
    this.location = results[0].geometry.location();
  })
}
