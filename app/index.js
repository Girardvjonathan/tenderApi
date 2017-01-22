// import YaaS from 'yaas.js';

var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var config = require('./config').config;
var fs = require("fs")
// Initialize the YaaS NodeJS client with the provided configuration
// const { clientId, clientSecret, scopes, projectId } = config;
// const yaas = new YaaS();
// yaas.init(clientId, clientSecret, scopes, projectId);

// Mock data
var tender = require('./mocks/tender.js').tender;
var tenders = require('./mocks/tenders.js').tenders;
var tenderer = require('./mocks/tenderers.js').tenderer;


// Initialize and configure Express
const port = process.env.PORT || 9002;
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router.get('/', function(req, res) {
    res.json({ message: 'Welcome to our API. Please be safe. Wear an helmet' });
});

// Get one tender
router.get(config.getOneAddTendererEndpoint, function(req, res) {
  // get tender with id = ?
    res.json(tender);
});

// Create a tender
router.post(config.getAllCreateOneEndpoint, (req, res) => {
  db.collection('tender').save(req.body, (err, result) => {
    if (err) res.sendStatus(400);
    res.sendStatus(200);
  })
});

// Add a tenderer to a tender
router.post(config.getOneAddTendererEndpoint, (req, res) => {
  // Add tenderer for a tender with id = ?

  db.collection('').save(req.body, (err, result) => {
    if (err) res.sendStatus(400);
    res.sendStatus(200);
  })
});

// GET all tenders
router.get(config.getAllCreateOneEndpoint, function(req, res) {
    res.json(tenders);
});


// Choose a tenderer for a tender
router.get(config.tendererChooseEndpoint, function(req, res) {
    res.json(tenders);
});
// Register API endpoints
app.use('/api', router);


// Database stuff
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://conuhack-db:' + config.dbPassword +
'@ds049466.mlab.com:49466/tender-conuhack', (err, database) => {
  if (err) return console.log(err)
  db = database
  console.log("we are in");

  // Start the server

  app.listen(port);
  console.log('Serving on port ' + port);
}
);
