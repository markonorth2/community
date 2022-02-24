const { json } = require('express');
const express = require('express');
const router = express.Router();

module.exports = (db) => {
	// get a list of all reward_points
	router.get('/', (req, res) => {
		const command = 'SELECT * FROM reward_points';
		db.query(command).then((data) => {
			res.json(data.rows);
		});
	});

	router.get('/top_candy', (req, res) => {
		const command =
			'SELECT user_name as user, reward_point as candy FROM users JOIN reward_points ON users.id = user_id ORDER BY reward_point DESC LIMIT 10;';
		db.query(command).then((data) => {
			res.json(data.rows);
		});
	});

	// add 10 reward_points to current user who submit a new post
	router.get('/postreward', (req, res) => {
    userID = req.session.users_id
		db.query(
			 `SELECT reward_point
			  FROM reward_points
				WHERE user_id = $1
			 `, [userID])
			 .then((data) => {
        console.log('req.session.user_id', req.session.users_id)  
				let value = data.rows[0].reward_point + 10;  
				db.query(
            `UPDATE reward_points 
             SET reward_point = $1::integer
						 WHERE user_id = $2`,
			    	[ value, userID ]
		    	)
					.then((data) => {
						return res.json(data);
					})
			 })
			 .catch((error) => console.log(error));	
	});
	return router;
};
