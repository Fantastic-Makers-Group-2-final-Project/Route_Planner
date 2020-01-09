const findCoordinates = require('../src/find_coordinates');

test('it returns an expected lat long pair for 0,0', () => {
  expect(findCoordinates([0, 0], 0, 0)).toEqual([0,0]);
});
