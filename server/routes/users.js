var express = require('express');
var router = express.Router();

const users = ['Daniel', 'Jaylen', 'Mark'];
 

// module.exports = () => {
//   router.get('/', (req, res) =>{
//     res.json(users);
//   })
//   return router;
// }
module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      res.json(data.rows);
    })
  });

  return router;
}