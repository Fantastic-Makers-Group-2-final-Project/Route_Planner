const findAndSnapCoords = require('../src/findAndSnapCoords');

test('it returns an array of five objects', () => {
  output = findAndSnapCoords([0,0], 0);
  expect(output).toHaveLength(5);
})
