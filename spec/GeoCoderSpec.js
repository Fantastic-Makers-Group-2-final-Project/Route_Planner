
// use strict;

describe('Geocoder', function () {


  it('returns an expected lat for a known postcode', async function() {
  var geocoder = new google.maps.Geocoder();
  var address = "RH2 9BG"
  geocoder.geocode( { 'address': address}, await function(results, status){
  var latitude = results[0].geometry.location.lat();
  console.log(latitude);
  expect(latitude).toEqual(51.2379692)});

})
});
// describe('geocoder returns lat for RH2 9BG - spy', function(){
//   var geocoder;
//   beforeEach(function() {
//     google.maps = {
//
//     }
//   })
// })

// describe('A spy, when configured to fake a return value', function(){
//   var foo, bar, fetchedBar;
//   beforeEach(function() {
//     foo = {
//       setBar: function(value) {
//         bar = value;
//       },
//       getBar: function() {
//         return bar;
//       }
//     };
//
//     spyOn(foo, 'getBar').and.returnValue(745);
//     foo.setBar(123);
//     fetchedBar = foo.getBar();
//   });
//   it('tracks that the spy was called', function() {
//     expect(foo.getBar).toHaveBeenCalled();
//   });
//   it('should not affect other functions', function() {
//     expect(bar).toEqual(123);
//   });
//   it('when called returns the requested value', function(){
//     expect(fetchedBar).toEqual(745);
//   });
// });
