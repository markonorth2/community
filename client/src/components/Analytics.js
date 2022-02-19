import React, { useEffect, useState } from 'react';

import '../styles/Analytics.css';

import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';

import axios from 'axios';

import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',

		marginBottom: 5
	},
	statSection: {
		borderLeft: 'solid 3px #6096BA',
		paddingLeft: 15,
		borderRadius: 5
	},
	analyticsContainer: {
		backgroundColor: 'white',
		border: '1px solid lightgrey',
		paddingTop: 10,
		marginBottom: 19
	}
});

function AnalyticsStyled() {
	const classes = useStyles();

	const [ reportCount, setReportCount ] = useState('loading..');
	const [ userCount, setUserCount ] = useState('loading..');
	// const [ displayReport, setDisplayReport ] = useState([]);

	useEffect(() => {
		getReportCount();
		getUserCount();
	}, []);

	const getReportCount = () => {
		return axios.get(`/reports/count_reports`).then((count) => {
			setReportCount(count.data[0].count);
		});
	};

	const getUserCount = () => {
		return axios.get(`/users/count_users`).then((count) => {
			setUserCount(count.data[0].count);
		});
	};

	return (
		<Box className={classes.analyticsContainer}>
			<Typography>
				<span class="material-icons">insights</span>Analytics
			</Typography>
			<Grid container direction="row" columns={2} spacing={2} className={classes.root}>
				<Grid item>
					<Grid className={classes.statSection}>
						<p>Members</p>
						<h2>{userCount}</h2>
					</Grid>
				</Grid>

				<Grid item>
					<Grid className={classes.statSection}>
						<p>Reports</p>
						<h2>{reportCount}</h2>
					</Grid>
					{/* <Grid className={classes.statSection}>
						<p>Members</p>
						<h2>3172</h2>
					</Grid>
					<Grid className={classes.statSection}>
						<p>Filler</p>
						<h2>27</h2>
					</Grid> */}
				</Grid>
			</Grid>
		</Box>
	);
}

function Analytics() {
	return <AnalyticsStyled />;
}

export default Analytics;
