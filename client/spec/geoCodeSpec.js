"use strict";

describe('Geocode', function() {
  it('gets the latitude from our postcode', async function(){
    const result = await Geocoder.getCoordinates('RH2 9BG');
    expect(result.lat).toEqual(51.2379692);
  });

  it('gets the longitude from our postcode', async function(){
    const result = await Geocoder.getCoordinates('RH2 9BG');
    expect(result.lng).toEqual(-0.2060545);
  });

})
