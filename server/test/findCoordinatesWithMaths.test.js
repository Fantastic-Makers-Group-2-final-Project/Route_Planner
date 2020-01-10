const findCoordinates = require('../src/findCoordinatesWithMaths');

test('it returns 3 new coordinates of 0,0 with start point 0,0 and distance 0', () => {
  expect(findCoordinates([0,0], 0)).toEqual([{"latitude": 0, "longitude": 0}, {"latitude": 0, "longitude": 0}, {"latitude": 0, "longitude": 0}]);
});

test('wayPointA is 0,0 when start point and distance are 0', () => {
  wayPoints = findCoordinates([0,0], 0);
  expect(wayPoints[0]).toEqual({"latitude": 0, "longitude": 0});
});
