const validator = (req, res, next) => {
    const name = req.query.name;
    console.log(typeof name, ' ', name)
    if(!isNaN(name)) next({message: 'Not a string'});
  req.name = name
  next()
  };
  
  module.exports = validator;
  