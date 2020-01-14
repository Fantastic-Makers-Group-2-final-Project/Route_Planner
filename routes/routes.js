const findAndSnapCoordinates = require('../src/findAndSnapCoords')

const appRouter = (app) => {
  app.get('/heartbeat', (req, res) => {
    res.send("OK");
  })

  app.post('/generate-waypoint-coordinates', async (req, res) => {
    let coordinates = await findAndSnapCoordinates(req.body.coordinates,req.body.distance);
    res.send(coordinates);
  })
};

module.exports = appRouter;
