// import YaaS from 'yaas.js';

var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var config = require('./config').config;
var fs = require("fs")
var ObjectId = require('mongodb').ObjectID;
// Initialize the YaaS NodeJS client with the provided configuration
// const { clientId, clientSecret, scopes, projectId } = config;
// const yaas = new YaaS();
// yaas.init(clientId, clientSecret, scopes, projectId);

// CORS for localdev
var cors = require('cors')
// Mock data
var tender = require('./mocks/tender.js').tender;
var tenders = require('./mocks/tenders.js').tenders;
var tenderer = require('./mocks/tenderers.js').tenderer;

// Initialize and configure Express
const port = process.env.PORT || 9002;
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

router.get('/', function(req, res) {
    res.json({ message: 'Welcome to our API. Please be safe. Wear an helmet' });
});

// Get one tender
router.get(config.getOneAddTendererEndpoint, function(req, res) {
  console.log(req.params.idproduct);
    db.collection('tender').findOne(
        { _id: new ObjectId(req.params.idproduct) }, function(err, data) {
          console.log(data);
          res.json(data);
        });
});

// Create one tender
router.post(config.getAllCreateOneEndpoint, (req, res) => {
  req.body.tenderID = Math.random();//TODO real function for ID
  db.collection('tender').save(req.body, (err, result) => {
    if (err) res.sendStatus(400);
    res.json(result);
  })
});

// Add a tenderer to a tender by its id
router.post(config.getOneAddTendererEndpoint, (req, res) => {
  db.collection('tender').update(
     { _id: new ObjectId(req.params.idproduct) },
     { $push:
       {
        "tenderer": req.body
       }
      },
      (err, result) => {
        if (err) res.sendStatus(400);
        console.log(result);
        res.json(result);
     })
});

// GET all tenders
router.get(config.getAllCreateOneEndpoint, function(req, res) {
  console.log("hello");
    db.collection('tender').find({}).toArray(function(err, data) {
      console.log(data);
      res.json(data);
    });
});

// Choose a tenderer for a tender
// TODO put a flag on the tenderer and the tender
router.get(config.tendererChooseEndpoint, function(req, res) {
     db.collection('tender').update(
         { _id: new ObjectId(req.params.idproduct) },
         { finish: true }, (err, result) => {
          if (err) res.sendStatus(400);
          console.log(result);
          res.json(result);
       })
    // res.json(tenders);
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
