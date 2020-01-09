function findCoordinates([lat,long], distance) {

  waypointA = new WaypointA([lat, long], distance)
  waypointB = new WaypointB([lat, long], distance)
  waypointC = new WaypointC([lat, long], distance)

  newCoordinates = [waypointA.calculate(), waypointB.calculate(), waypointC.calculate()]
  return newCoordinates;
};

module.exports = findCoordinates;


WaypointA = function([lat, long], distance) {
  this._startPoint = [lat, long];
  this._totalDistance = distance;
  this.distance = this._totalDistance / 4
}

WaypointA.prototype.calculate = function() {
  return {"latitude": this._startPoint[0], "longitude": this._startPoint[1]}
}


WaypointB = function([lat, long], distance) {
  this._startPoint = [lat, long];
  this._totalDistance = distance;
  this.distance = this._totalDistance / 4
}

WaypointB.prototype.calculate = function() {
  return {"latitude": this._startPoint[0], "longitude": this._startPoint[1]}
}


WaypointC = function([lat, long], distance) {
  this._startPoint = [lat, long];
  this._totalDistance = distance;
  this.distance = this._totalDistance / 4
}

WaypointC.prototype.calculate = function() {
  return {"latitude": this._startPoint[0], "longitude": this._startPoint[1]}
}
