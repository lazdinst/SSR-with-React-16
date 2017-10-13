const session = require('express-session');

module.exports = session({
  secret: 'shh, it\'s a secret',
  resave: false,
  saveUninitialized: false,
});
