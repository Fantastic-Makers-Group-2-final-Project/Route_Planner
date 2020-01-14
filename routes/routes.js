const findCoordinates = require('../src/findCoordinatesWithApi')

const appRouter = (app) => {
  app.get('/heartbeat', (req, res) => {
    res.send("OK");
  })

  app.post('/generate-waypoint-coordinates', (req, res) => {
    let coordinates = findCoordinates(req.body.coordinates,req.body.distance);
    res.send(coordinates);
  })
};

module.exports = appRouter;
