import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Avatar, Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';

import '../styles/TopMembers.css';

function TopMembers() {
	// const [ userReportCount, setUserReportCount ] = useState('loading..');
	const [ userCandyCount, setUserCandyCount ] = useState([]);
	// // const [ displayReport, setDisplayReport ] = useState([]);

	useEffect(() => {
		getUserCandyCount();
	}, []);

	const getUserCandyCount = () => {
		return axios.get(`/reward_points/top_candy`).then((candyCount) => {
			setUserCandyCount(candyCount.data);
		});
	};

	const memberList = userCandyCount.map((member) => {

		return (
			<CardHeader avatar={<Avatar>M</Avatar>} title={member.user} subheader={`172 Reports  ${member.candy} Candy`} />
		)
	})

	return (
		<Grid item lg={12} sm="none" xs={12} className="topMembers">
			<Typography>
				<span class="material-icons">leaderboard</span> Top Members
			</Typography>
			{memberList}
		</Grid>
	);
}

export default TopMembers;

/*


'
SELECT user_name as user, reward_point as candy
FROM users
JOIN reward_points ON users.id = user_id
ORDER BY reward_point
DESC
LIMIT 10;

///

SELECT reward_point, user_id 
FROM reward_points
JOIN users ON user_id = users.id
ORDER BY reward_point
DESC
LIMIT 10;






*/

/*


'SELECT * 
FROM users
JOIN reward_points ON users.id = user_id
JOIN reports ON users.id = user_id`




*/
