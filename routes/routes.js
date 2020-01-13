const findAndSnapCoordsCoordinates = require('../src/findAndSnapCoords')

const appRouter = (app) => {
  app.get('/heartbeat', (req, res) => {
    res.send("OK");
  })

  app.post('/generate-waypoint-coordinates', (req, res) => {
    let coordinates = findAndSnapCoords(req.body.coordinates,req.body.distance);
    console.log(req.body)
    res.send(coordinates)
  })
};

module.exports = appRouter;
