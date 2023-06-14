const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());



const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');



// Middleware
app.use(logger);

// Routes
app.get('/person', validator, (req, res) => {
 
  res.status(200).json( {name: `${req.name}`});
});
app.get ('/bad', badRequest)
// Error handlers
app.use('*',notFoundHandler);
app.use(errorHandler);

function badRequest(req,res, next){
    req.body = {
       test: 'test'
    }
   next({status: 500, message: 'test'})
   }
module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  },
  app,
   // Export the Express app for testing purposes
};
