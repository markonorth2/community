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

	// get value of a reward_point by id
	router.get('/:id', (req, res) => {
		const command = `SELECT * FROM reward_points
    WHERE id = $1::integer`;
		const value = [ req.params.id ];
		db.query(command, value).then((data) => {
			res.json(data.rows);
		});
	});

	// edit reward_points
	router.put('/:id', (req, res) => {
		//req.body is axios put command's second parameter
		console.log('req.body', req.body);
		const { reward_point } = req.body;

		db
			.query(
				`UPDATE reward_points 
       SET reward_point = $1::integer`,
				[ reward_point ]
			)
			.catch((error) => console.log(error));
	});

	return router;
};
