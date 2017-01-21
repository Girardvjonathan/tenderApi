import YaaS from 'yaas.js';
import express from 'express';
import bodyParser from 'body-parser';

import config from './config';

// Initialize the YaaS NodeJS client with the provided configuration
const { clientId, clientSecret, scopes, projectId } = config;
const yaas = new YaaS();
yaas.init(clientId, clientSecret, scopes, projectId);

// Initialize and configure Express
const app = express();
const port = process.env.PORT || 9002;
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get(config.tenderSubmissionnerEndpoint, function(req, res) {
    res.send("idproduct is set to " + req.params.idproduct);
});

router.get(config.tenderChooseEndpoint, function(req, res) {

});

// Register API endpoints
app.use('/api', router);

// Start the server
app.listen(port);
