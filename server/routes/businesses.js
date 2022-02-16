const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT * FROM businesses";
    db.query(command).then(data => {
      res.json(data.rows);
    });
  });

  router.get('/:id', (req, res) => {
    const command = `SELECT * FROM businesses
    WHERE `
    db.query(command).then(data => {
      res.json(data.rows);
    });
  });


  
  return router;
};