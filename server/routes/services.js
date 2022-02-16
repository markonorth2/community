const express = require('express');
const router = express.Router();
 
module.exports = (db) => {
  // get a list of all services
  router.get('/', (req, res) => {
    const command = "SELECT * FROM services";
    db.query(command).then(data => {
      res.json(data.rows);
    });
  });

  // get value of a service by id
  router.get('/:id', (req, res) => {
    const command = `SELECT * FROM services
    WHERE id = $1::integer`; 
    const value = [req.params.id];
    db.query(command, value).then(data => {
      res.json(data.rows);
    });
  });

  // create/edit new service - ON CONFLICT in the query command below is used to determine the cases either create new or edit existed
  router.put("/:id", (req, res) => {
    
    //req.body is axios put command's second parameter
    console.log('req.body', req.body)
    const { category_id, name, image_url } = req.body;

    db.query(
      `INSERT INTO services (category_id, name, image_url, id)
      VALUES ($1::integer, $2::text, $3::text, $4::integer)
      ON CONFLICT (id) DO
      UPDATE SET category_id = $1::integer, name = $2::text, image_url = $3::text, modified_at = CURRENT_TIMESTAMP
    `,
      [category_id, name, image_url, Number(req.params.id)]
    )
      .catch(error => console.log(error));
  });

  //delete a service
  router.delete("/:id", (req, res) => {

    db.query(`DELETE FROM services WHERE id = $1::integer`, [
      req.params.id
    ]);
  });

  return router;
};