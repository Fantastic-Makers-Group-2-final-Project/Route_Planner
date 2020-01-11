const coordsObjectToArray = require('../src/coordsObjectToArray.js')

test('it converts an array of one object to  a 2d array', () => {
  expect(coordsObjectToArray([{lat: 0, lng: 0}])).toEqual([[0,0]]);
})
