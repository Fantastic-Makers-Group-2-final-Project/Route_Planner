"use strict";

describe('Geocode', function() {
var output;
beforeEach(function() {
  output = new Geocode('RH2 9BG');
});

  it('gets the latitude  from our postcode', function(){
    // expect(output).toEqual(51.2379692)});
    expect(output.latitude).toEqual(51.2379692)});
});
