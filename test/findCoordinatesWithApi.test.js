const findCoordinates = require('../src/findCoordinatesWithApi');
const chooseBearings = require('../src/chooseBearings');

test('it returns 4 new coordinates of 0,0 when start point is 0,0 and distance is 0', () => {
  expect(findCoordinates({lat: 0, lng: 0}, 0)).toEqual([{lat: 0, lng: 0}, {lat: 0, lng: 0}, {lat: 0, lng: 0}, {lat: 0, lng: 0}]);
});

test('it returns the NORTH bearings for a 5K route around Makers', () => {
  expect(findCoordinates({lat: 51.5178767, lng: -0.0762007}, 5)).toEqual([{ lat: 51.51787669999999, lng: -0.07620069999995849 }, { lat: 51.523789952511784, lng: -0.06669614356542297 }, { lat: 51.52970575928739, lng: -0.07620069999995849 }, { lat: 51.523789952511784, lng: -0.085705256434494 }]);
});
