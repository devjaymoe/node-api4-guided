

//export this crap
module.exports = (req, res, next) => {
  const { authorization } =  req.headers;

  // make auth code be part of enviornment
  const API_KEY = process.env.API_KEY;

  if ( authorization === API_KEY) {
    next();
  } else {
    // will block if middleware added anywhere with this res
    res.status(403).json({ message: 'you have no power here'})

  };
};