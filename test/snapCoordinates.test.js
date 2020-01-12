const snapCoordinates = require('../src/snapCoordinates.js')

test('the lat lng values for a given coordinate remain the same', () => {
  return snapCoordinates([[51.517886201263657,-0.07616727124343367]]).then(data => {
    expect(data).toEqual([{"latitude":51.517886201263657, "longitude": -0.07616727124343367}, {"latitude":51.517886201263657, "longitude": -0.07616727124343367}]);
  });
});

test('the lat lng values of a location near Makers snaps to Makers',  () => {
  return snapCoordinates([[51.5178767,-0.0762007]]).then(data => {
    expect(data).toEqual([{"latitude": 51.51788620126366, "longitude": -0.07616727124343173}, {"latitude": 51.51788620126366, "longitude": -0.07616727124343173}]);
  });
});
