const findAndSnapCoords = require('../src/findAndSnapCoords');

test('it returns an array of LatLng coords with the same coords as the start point when the start is on a road and the distance is 0', async function(){
  const output = await findAndSnapCoords({lat: 51.57442440946371, lng: -0.25268097439763476}, 0);
  expect(output).toEqual([{ latitude: 51.574424409463724, longitude: -0.25268097439763804 }, { latitude: 51.574424409463724, longitude: -0.25268097439763804 }, { latitude: 51.574424409463724, longitude: -0.25268097439763804 }, { latitude: 51.574424409463724, longitude: -0.25268097439763804 }, { latitude: 51.574424409463724, longitude: -0.25268097439763804 }]);
})
