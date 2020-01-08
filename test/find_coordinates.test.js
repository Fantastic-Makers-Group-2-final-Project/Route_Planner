const findCoordinates = require('../src/find_coordinates');

test('it returns 3 new coordinates of 0,0 with start point 0,0 and distance 0', () => {
  expect(findCoordinates([0,0], 0)).toEqual([{"latitude": 0, "longitude": 0}, {"latitude": 0, "longitude": 0}, {"latitude": 0, "longitude": 0}]);
});
