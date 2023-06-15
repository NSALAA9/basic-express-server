// const validator = (req, res, next) => {
//     const name = req.query.name;
//     console.log(typeof name, ' ', name)
//     if(!isNaN(name)) next({message: 'Not a string'});
//     else if(name.trim().length() == 0) next({message: 'Empty'});
//   req.name = name
//   next()
//   };
  
//   module.exports = validator;
  

const validator = (req, res, next) => {
    const name = req.query.name;
    console.log(typeof name, ' ', name)
    if (!isNaN(name)) {
      next({ message: 'Not a string' });
    } else if (name.trim().length === 0) {
      next({ message: 'Empty' });
    }
    req.name = name;
    next();
  };
  
  module.exports = validator;
  