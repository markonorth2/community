import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Avatar, Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';

import CakeIcon from '@mui/icons-material/Cake';

import '../styles/TopMembers.css';
import Cake from '@mui/icons-material/Cake';

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
		const letter = member.user[0]
		return (
			<CardHeader avatar={<Avatar>{letter}</Avatar>} title={member.user} subheader={`${member.candy} Candy `} />
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