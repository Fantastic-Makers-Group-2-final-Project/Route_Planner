const findCoordinates = require('../src/findCoordinatesWithApi');

test('it returns 3 new coordinates of 0,0 when start point is 0,0 and distance is 0', () => {
  expect(findCoordinates([0,0], 0)).toEqual([{"latitude": 0, "longitude": 0}, {"latitude": 0, "longitude": 0}, {"latitude": 0, "longitude": 0}])
});
