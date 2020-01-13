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

test('it can convert an array of coordinates', () => {
  return snapCoordinates([[51.5178767,-0.0762007], [51.52581606811841, -0.06343865245844427], [51.5337592191676, -0.07620069999995849], [51.52581606811841, -0.08896274754147271]]).then(data => {
    expect(data).toEqual([{ "latitude": 51.517886201263657, "longitude": -0.076167271243431728}, { "latitude": 51.526035366728905, "longitude": -0.063500329685518164}, { "latitude": 51.53376522978072, "longitude": -0.07591985167319977}, { "latitude": 51.525493824586988, "longitude": -0.088874936455702561}, { "latitude": 51.517886201263657, "longitude": -0.076167271243431728}]);
  })
})
