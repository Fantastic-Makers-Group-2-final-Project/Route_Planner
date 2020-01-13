const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const whitelist = ['https://routearound.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const routes = require('./routes/routes.js')(app);

const server = app.listen(process.env.PORT || 3001, () => {
  console.log('listening on port %s...', server.address().port);
});
