const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // get a list of all reports
  router.get("/", (req, res) => {
    const command = "SELECT * FROM reports";
    db.query(command).then((data) => {
      res.json(data.rows);
    });
  });

  router.get('/popular', (req, res) => {
		const command = 'SELECT reports.date as reportDate, reports.id, businesses.name as businessName, services.name as serviceName, ratings.customer_service_rating as serviceRating, ratings.product_rating as productRating, reports.review as review, users.user_name as userName, reports.price as price, reports.created_at as timestamp FROM reports JOIN businesses ON business_id = businesses.id JOIN users ON user_id = users.id JOIN services ON service_id = services.id JOIN ratings ON reports.id = report_id'
		db.query(command).then((data) => {
			res.json(data.rows);
		});
	});

	router.get('/recent', (req, res) => {
		const command = 'SELECT reports.date as reportDate, reports.id, businesses.name as businessName, services.name as serviceName, ratings.customer_service_rating as serviceRating, ratings.product_rating as productRating, reports.review as review, users.user_name as userName, reports.price as price, reports.created_at as timestamp FROM reports JOIN businesses ON business_id = businesses.id JOIN users ON user_id = users.id JOIN services ON service_id = services.id JOIN ratings ON reports.id = report_id ORDER BY reports.created_at DESC';
		db.query(command).then((data) => {
			res.json(data.rows);
		});
	});

	// router.get('/your_reports', (req, res) => {
	// 	const command = 'SELECT * FROM reports JOIN users ON user_id = users.id WHERE user_id = 1';
	// 	db.query(command).then((data) => {
	// 		res.json(data.rows);
	// 	});
	// });

	router.get('/count_reports', (req, res) => {
		const command = 'SELECT COUNT(*) FROM reports ';
		db.query(command).then((data) => {
			res.json(data.rows);
		});
	});

  // get value of a report by id
  router.get("/:id", (req, res) => {
    const command = `SELECT * FROM reports
    WHERE id = $1::integer`;
    const value = [req.params.id];
    db.query(command, value).then((data) => {
      res.json(data.rows);
    });
  });

  // create a new report
  router.post("/new", (req, response) => {
    //req.body is axios put command's second parameter
    const { service_id, business_id, review, price, date } = req.body;

    db.query(
      `INSERT INTO reports (service_id, user_id, business_id, review, price, date)
      VALUES ($1::integer, $2::integer, $3::integer, $4::text, $5::money, $6::date)
      RETURNING id
    `,
      [service_id, req.session.users_id, business_id, review, price, date]
    )
      .then((res) => {
        return response.json(res.rows[0]);
      })
      .catch((error) => console.log(error));
  });

  // create/edit new report - ON CONFLICT in the query command below is used to determine the cases either create new or edit existed
	router.put('/:id', (req, res) => {
		//req.body is axios put command's second parameter
		console.log('req.body', req.body);
		const { service_id, user_id, business_id, review, price, date, receipt_url } = req.body;

		db
			.query(
				`INSERT INTO reports (service_id, user_id, business_id, review, price, date, receipt_url, id)
      VALUES ($1::integer, $2::integer, $3::integer, $4::text, $5::money, $6::date, $7::text, $8::integer)
      ON CONFLICT (id) DO
      UPDATE SET service_id = $1::integer, user_id = $2::integer, business_id = $3::integer, review = $4::text, price = $5::money, date = $6::date, receipt_url = $7::text, modified_at = CURRENT_TIMESTAMP
    `,
				[ service_id, user_id, business_id, review, price, date, receipt_url, Number(req.params.id) ]
			)
			.catch((error) => console.log(error));
	});
      
  //delete a report
  router.delete("/:id", (req, res) => {
    db.query(`DELETE FROM reports WHERE id = $1::integer`, [req.params.id]);
  });

  return router;
};
				
/*

SELECT *, user_name FROM reports 
JOIN users ON user_id = users.id;

///

SELECT * FROM reports JOIN users ON user_id = users.id ORDER BY reports.created_at DESC

///

SELECT * FROM reports JOIN users ON user_id = users.id


///



// */
// SELECT reports.id, businesses.name as businessName, services.name as serviceName, ratings.customer_service_rating as serviceRating, ratings.product_rating as productRating, reports.review as review, users.user_name as userName 
// FROM reports
// JOIN businesses ON business_id = businesses.id
// JOIN users ON user_id = users.id 
// JOIN services ON service_id = services.id
// JOIN ratings ON reports.id = report_id;

 





//