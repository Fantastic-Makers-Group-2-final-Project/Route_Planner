const findCoordinates = require('../src/find_coordinates');

test('it returns a new coordinate of 0,0 when the start point is 0,0 and the distance is 0', () => {
  expect(findCoordinates([0, 0], 0)).toEqual({"latitude": 0, "longitude": 0});
});
