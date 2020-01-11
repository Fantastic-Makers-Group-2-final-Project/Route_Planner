function coordsObjectToArray(input){
  convertedCoords = []

  for (i = 0; i < input.length; i++) {
    convertedCoords.push([input[i].lat, input[i].lng])
  }
  return convertedCoords
}



module.exports = coordsObjectToArray;
