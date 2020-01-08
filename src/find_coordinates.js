function findCoordinates([lat,long], distance) {
  // return [{"latitude": 0, "longitude": 0}, {"latitude": 0, "longitude": 0}, {"latitude": 0, "longitude": 0}]
  newCoordinates = [];
  findWaypointA([lat,long], distance);
  findWaypointB([lat,long], distance);
  findWaypointC([lat,long], distance);
  return newCoordinates;
};

function findWaypointA([lat,long], distance) {
  newCoordinates.push({"latitude": lat, "longitude": long});
};

function findWaypointB([lat,long], distance) {
  newCoordinates.push({"latitude": lat, "longitude": long});
};

function findWaypointC([lat,long], distance) {
  newCoordinates.push({"latitude": lat, "longitude": long});
};

module.exports = findCoordinates;
