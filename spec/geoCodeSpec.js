"use strict";

describe('Geocode', function() {
var output;
beforeEach(async function() {
 output = new Geocode('RH2 9BG');
});

  it('gets the latitude  from our postcode', function(){
    const test =  output.latitude
    expect(test).toEqual(51.2379692)});
});
