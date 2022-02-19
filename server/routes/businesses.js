const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // get a list of all businesses
  router.get('/', (req, res) => {
    const command = "SELECT * FROM businesses";
    db.query(command).then(data => {
      res.json(data.rows);
    });
  });
  
  // get value of a business by id
  router.get('/:id', (req, res) => {
    const command = `SELECT * FROM businesses
    WHERE id = $1::integer`; 
    const value = [req.params.id];
    db.query(command, value).then(data => {
      res.json(data.rows);
    });
  });

  // create/edit new business - ON CONFLICT in the query command below is used to determine the cases either create new or edit existed
  router.put("/:id", (req, res) => {
    
    //req.body is axios put command's second parameter
    
    const { category_id, name, city, province_state, country, unit_number, street_address, postal_code, phone_number, website_url, image_url } = req.body;

    db.query(
      `INSERT INTO businesses (category_id, name, city, province_state, country, unit_number, street_address, postal_code, phone_number, website_url, image_url, id)
      VALUES ($1::integer, $2::text, $3::text, $4::text, $5::text, $6::text, $7::text, $8::text, $9::text, $10::text, $11::text, $12::integer)
      ON CONFLICT (id) DO
      UPDATE SET category_id = $1::integer, name = $2::text, city = $3::text, province_state = $4::text, country = $5::text, unit_number = $6::text, street_address = $7::text, postal_code = $8::text, phone_number = $9::text, website_url = $10::text, image_url = $11::text, modified_at = CURRENT_TIMESTAMP
    `,
      [category_id, name, city, province_state, country, unit_number, street_address, postal_code, phone_number, website_url, image_url, Number(req.params.id)]
    )
      .catch(error => console.log(error));
  });

  //delete a business
  router.delete("/:id", (req, res) => {

    db.query(`DELETE FROM businesses WHERE id = $1::integer`, [
      req.params.id
    ]);
  });

  return router;
};