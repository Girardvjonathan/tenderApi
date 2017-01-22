// import YaaS from 'yaas.js';

var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// Database stuff
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('link-to-mongodb', (err, database) => {
  // ... start the server
})



var config = require('./config').config;
var fs = require("fs")
// Initialize the YaaS NodeJS client with the provided configuration
// const { clientId, clientSecret, scopes, projectId } = config;
// const yaas = new YaaS();
// yaas.init(clientId, clientSecret, scopes, projectId);

// Mock data
var tender = require('./mocks/tender.js').tender;
var tenders = require('./mocks/tenders.js').tenders;
var tenderer = require('./mocks/tenderer.js').tenderer;


// Initialize and configure Express
const port = process.env.PORT || 9002;
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router.get('/', function(req, res) {
    res.json({ message: 'Welcome to our API. Please be safe. Wear an helmet' });
});

router.get(config.tenderEndpoint, function(req, res) {
    res.json(tender);
});

router.get(config.tendererEndpoint, function(req, res) {
    res.json(tenderer);
});

router.get(config.tendersEndpoint, function(req, res) {
    res.json(tenders);
});
// Register API endpoints
app.use('/api', router);

// Start the server
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://conuhack-db:MyDbConUhack@ds049466.mlab.com:49466/tender-conuhack', (err, database) => {
  if (err) return console.log(err)
  db = database
  console.log("we are in");
  app.listen(port);
  console.log('Serving on port ' + port);
}
);
