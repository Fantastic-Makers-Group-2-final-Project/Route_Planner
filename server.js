const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const routes = require('./routes/routes.js')(app);

const server = app.listen(process.env.PORT || 3001, () => {
  console.log('listening on port %s...', server.address().port);
});
