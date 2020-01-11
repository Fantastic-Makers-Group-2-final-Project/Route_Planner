const findCoordinates = require('../src/findCoordinatesWithApi');

test('it returns 3 new coordinates of 0,0 when start point is 0,0 and distance is 0', () => {
  expect(findCoordinates([0,0], 0)).toEqual([{lat: 0, lng: 0}, {lat: 0, lng: 0}, {lat: 0, lng: 0}, {lat: 0, lng: 0}]);
});

test('it returns 3 local coordinates for a 5K route around Makers', () => {
  expect(findCoordinates([51.5178767, -0.0762007], 5000)).toEqual([{ lat: 51.51787669999999, lng: -0.07620069999995849 }, { lat: 51.52581606811841, lng: -0.06343865245844427 }, { lat: 51.5337592191676, lng: -0.07620069999995849 }, { lat: 51.52581606811841, lng: -0.08896274754147271 }]);
});
