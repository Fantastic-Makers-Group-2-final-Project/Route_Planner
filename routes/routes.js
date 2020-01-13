const findAndSnapCoordsCoordinates = require('../src/findAndSnapCoords')

const appRouter = (app) => {
  app.get('/heartbeat', (req, res) => {
    res.send("OK");
  })

  app.post('/generate-waypoint-coordinates', (req, res) => {
    let coordinates = await findAndSnapCoords(req.body.coordinates,req.body.distance);
    .then(console.log(req.body))
    .then(res.send(coordinates))
  })
};

module.exports = appRouter;
