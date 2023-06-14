const logger = (req, res, next) => {
    console.log(`Method: ${req.method}, Path: ${req.path}`);
    next();
  };
  
  module.exports = logger;
  
  //this logger middleware function can be used to log information about incoming requests, 
  //such as the HTTP method and the path, before passing the control to the next middleware function.
  
  // It provides a way to track and monitor the flow of requests through the server.




