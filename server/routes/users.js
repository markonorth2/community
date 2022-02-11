var express = require('express');
var router = express.Router();

const users = ['Daniel', 'Jaylen', 'Mark'];
 

module.exports = () => {
  router.get('/', (req, res) =>{
    res.json(users);
  })
  return router;
}
