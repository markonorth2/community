const express = require('express');
const router = express.Router();
 
module.exports = (db) => {
  // get a list of all ratings
  router.get('/', (req, res) => {
    const command = "SELECT * FROM ratings";
    db.query(command).then(data => {
      res.json(data.rows);
    });
  });

  // get value of a rating by id
  router.get('/:id', (req, res) => {
    const command = `SELECT * FROM ratings
    WHERE id = $1::integer`; 
    const value = [req.params.id];
    db.query(command, value).then(data => {
      res.json(data.rows);
    });
  });

  // create a new rating
  router.post("/new", (req, response) => {
    
    //req.body is axios put command's second parameter
    const { business_id, report_id, customer_service_rating, product_rating } = req.body;

    db.query(
      `INSERT INTO ratings (business_id, report_id, customer_service_rating, product_rating)
      VALUES ($1::integer, $2::integer, $3::decimal, $4::decimal) RETURNING id
    `,
      [business_id, report_id, customer_service_rating, product_rating]
    )
    .then((res) => {
      return response.json(res.rows[0])
    })
    .catch(error => console.log(error));
    
  });

  // create/edit new rating - ON CONFLICT in the query command below is used to determine the cases either create new or edit existed
  router.put("/:id", (req, res) => {
    
    //req.body is axios put command's second parameter
    console.log('req.body', req.body)
    const { business_id, report_id, customer_service_rating, product_rating } = req.body;

    db.query(
      `INSERT INTO ratings (business_id, report_id, customer_service_rating, product_rating, id)
      VALUES ($1::integer, $2::integer, $3::integer, $4::integer, $5::integer)
      ON CONFLICT (id) DO
      UPDATE SET business_id = $1::integer, report_id = $2::integer, customer_service_rating = $3::decimal, product_rating = $4::decimal
    `,
      [business_id, report_id, customer_service_rating, product_rating, Number(req.params.id)]
    )
      .catch(error => console.log(error));
  });

  //delete a rating
  router.delete("/:id", (req, res) => {

    db.query(`DELETE FROM ratings WHERE id = $1::integer`, [
      req.params.id
    ]);
  });

  return router;
};