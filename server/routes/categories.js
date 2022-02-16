const express = require('express');
const router = express.Router();
 
module.exports = (db) => {
  // get a list of all categories
  router.get('/', (req, res) => {
    const command = "SELECT * FROM categories";
    db.query(command).then(data => {
      res.json(data.rows);
    });
  });

  // get value of a category by id
  router.get('/:id', (req, res) => {
    const command = `SELECT * FROM categories
    WHERE id = $1::integer`; 
    const value = [req.params.id];
    db.query(command, value).then(data => {
      res.json(data.rows);
    });
  });

  // create/edit new category - ON CONFLICT in the query command below is used to determine the cases either create new or edit existed
  router.put("/:id", (req, res) => {
    
    //req.body is axios put command's second parameter
    console.log('req.body', req.body)
    const { name, image_url } = req.body;

    db.query(
      `INSERT INTO categories (name, image_url, id)
      VALUES ($1::text, $2::text, $3::integer)
      ON CONFLICT (id) DO
      UPDATE SET name = $1::text, image_url = $2::text, modified_at = CURRENT_TIMESTAMP`,
      [name, image_url, Number(req.params.id)]
    )
      .catch(error => console.log(error));
  });

  //delete a category
  router.delete("/:id", (req, res) => {

    db.query(`DELETE FROM categories WHERE id = $1::integer`, [
      req.params.id
    ]);
  });

  return router;
};