const serverless = require('serverless-http');
let app = require('./server').default;

// Lambda starter
module.exports.aws = serverless(app);

// Google starter
module.exports.gc = app;