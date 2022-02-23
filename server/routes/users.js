const express = require('express');
const router = express.Router();


 
module.exports = (db) => {
  // get a list of all users
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      res.json(data.rows);
    });
  });

  	router.get('/count_users', (req, res) => {
		const command = 'SELECT COUNT(*) FROM users';
		db.query(command).then((data) => {
			res.json(data.rows);
		});
	});


  // get value of a user by id
  router.get('/get/:id', (req, res) => {
    const command = `SELECT * FROM users
    WHERE id = $1::integer`; 
    const value = [req.params.id];
    db.query(command, value).then(data => {
      res.json(data.rows);
    });
  });

  //for sign-in page, return password by email as wildcard
  router.post('/signin', (req, res) => {
    const { email, loginPassword } = req.body;

    const command = `SELECT password, id FROM users
    WHERE email = $1::text`; 
    const value = [email];
    db.query(command, value).then(data => {
      let authIsTrue = null;
      if (data.rows[0] && data.rows[0].password === loginPassword) {
        authIsTrue = true;
        req.session.users_id = data.rows[0].id;
      } 
      res.json({authIsTrue});
    });
  });

  // for sign-up page, create new user 
  router.post('/signup', (req, res) => {
    
    //req.body is axios put command's second parameter
    const { first_name, last_name, email, user_name, password, } = req.body;

    db.query(
      `INSERT INTO users (first_name, last_name, email, user_name, password)
       VALUES ($1::text, $2::text, $3::text, $4::text, $5::text) 
       RETURNING id`,
      [first_name, last_name, email, user_name, password]
    )
      .then((id) => {
        req.session.users_id = id;
        return res.json(id);
      })
      .catch(error => console.log(error));
  });

  // create/edit new user - ON CONFLICT in the query command below is used to determine the cases either create new or edit existed
  router.put("/:id", (req, res) => {
    
    //req.body is axios put command's second parameter
    console.log('req.body', req.body)
    const { first_name, last_name, email, user_name, password, description, image_url } = req.body;

    db.query(
      `INSERT INTO users (first_name, last_name, email, user_name, password, description, image_url, id)
      VALUES ($1::text, $2::text, $3::text, $4::text, $5::text, $6::text, $7::text, $8::integer)
      ON CONFLICT (id) DO
      UPDATE SET first_name = $1::text, last_name = $2::text, email = $3::text, user_name = $4::text, password = $5::text, description = $6::text, image_url = $7::text, modified_at = CURRENT_TIMESTAMP
    `,
      [first_name, last_name, email, user_name, password, description, image_url, Number(req.params.id)]
    )
      .catch(error => console.log(error));
  });

  //delete a user
  router.delete("/:id", (req, res) => {

    db.query(`DELETE FROM users WHERE id = $1::integer`, [
      req.params.id
    ]);
  });

  return router;
};