const findAndSnapCoords = require('../src/findAndSnapCoords');

test('it returns an array of five objects', () => {
  output = findAndSnapCoords({lat: 0, lng: 0}, 0);
  expect(output).toHaveLength(5);
})
