import React, { useEffect } from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { CardContent, TextField } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Paper } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { makeStyles } from '@material-ui/core/styles';
import '../styles/Report.css';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { current_feed_data, recent } from '../actions';
import { popular } from '../actions';
import { your_recent } from '../actions';

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';

import axios from 'axios';

function getReports() {
	return axios.get(`/reports`);
}

// need useState for selected tab

// change state => return axios call

// console.log data from axios

const useStyles = makeStyles({
	report: {
		marginRight: 100
	},
	newReport: {
		width: 611,
		marginBottom: 20,
		backgroundColor: '#FFFFFF'
	},
	communityToday: {
		marginBottom: 25
	}
});

function CreateReportField() {
	const classes = useStyles();
	const navigate = useNavigate();
	return (
		<TextField
			id="outlined-basic"
			className={classes.newReport}
			label="Create New Report"
			variant="outlined"
			size={'small'}
			onClick={() => navigate('/report')}
		/>
	);
}

const ReportStyled = () => {
	const classes = useStyles();
	const display = useSelector((state) => state.display);
	// const feed = useSelector((state) => state.feed);
	const dispatch = useDispatch();

	const setStateFeed = (actionType) => {
		getReports().then((reports) => {
			const reportsArr = reports.data;
			dispatch(actionType);
			dispatch(current_feed_data(reportsArr));
		});
	};

	return (
		<Grid item md={4} large={6} sm={6} xs={9} className={classes.report}>
			<CreateReportField />
			<div className="reportBtns">
				<Button
					className={display === 'POPULAR' ? 'selected' : 'unselected'}
					size="large"
					onClick={() => setStateFeed(popular())}
				>
					<LocalFireDepartmentIcon />
					Popular
				</Button>
				<Button
					className={display === 'RECENT' ? 'selected' : 'unselected'}
					size="large"
					onClick={() => setStateFeed(recent())}
				>
					<AccessTimeFilledIcon />
					Recent
				</Button>
				<Button
					className={display === 'YOUR_RECENT' ? 'selected' : 'unselected'}
					size="large"
					onClick={() => setStateFeed(your_recent())}
				>
					<ViewTimelineIcon />
					Your Recent
				</Button>
			</div>

			{/* <div className="feed">{tempArr.id}</div> */}
		</Grid>
	);
};

export default function Report() {
	return <ReportStyled />;
}
