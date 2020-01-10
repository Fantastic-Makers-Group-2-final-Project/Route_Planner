const snapCoordinates = require('../src/snapCoordinates.js')

test('the lat lng values for a given coordinate remain the same', () => {
  expect(snapCoordinates([51.517886201263657,-0.076167271243431728])).toEqual([51.517886201263657,-0.076167271243431728]);
});
