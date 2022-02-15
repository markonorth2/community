const express = require('express');
const router = express.Router();
 
module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT * FROM reward_points";
    db.query(command).then(data => {
      res.json(data.rows);
    });
  });

  return router;
};