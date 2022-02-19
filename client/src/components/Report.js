import React, { useEffect } from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { CardContent, TextField } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Button } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { makeStyles } from '@material-ui/core/styles';
import '../styles/Report.css';

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';

import axios from 'axios';

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
	const [ display, setDisplay ] = useState('POPULAR');
	const [ displayReport, setDisplayReport ] = useState([]);

	useEffect(
		() => {
			setStateFeed('POPULAR');
		},
		[ setDisplay ]
	);
	const setStateFeed = (actionType) => {
		switch (actionType) {
			case 'POPULAR':
				return axios.get(`/reports/popular`).then((reports) => {
					setDisplayReport(reports.data);
					setDisplay(actionType);
				});

			case 'RECENT':
				return axios.get(`/reports/recent`).then((reports) => {
					setDisplayReport(reports.data);
					setDisplay(actionType);
				});

			case 'YOUR_REPORTS':
				return axios.get(`/reports/your_reports`).then((reports) => {
					setDisplayReport(reports.data);
					setDisplay(actionType);
				});

			default:
				return axios.get(`/reports/popular`).then((reports) => {
					setDisplayReport(reports.data);
					setDisplay(actionType);
				});
		}
	};

	const singleReview = displayReport.map((report) => {
		console.log(report);
		return (
			<div className="report">
				<CardHeader
					avatar={<Avatar>J</Avatar>}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title={`BUSINESS NAME- TYPE OF SERVICE - ${report.price}`}
					subheader={report.created_at}
				/>
				<CardContent>
					<Typography variant="body1" color="text.secondary">
						 {`Product Rating: 5.5`}			 
						 {/* {`Customer Service Rating: 9`} */}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{report.review}
					</Typography>
				</CardContent>
			</div>
		);
	});
	return (
		<Grid item md={4} large={6} sm={6} xs={9} className={classes.report}>
			<CreateReportField />
			<div className="reportBtns">
				<Button
					className={display === 'POPULAR' ? 'selected' : 'unselected'}
					size="large"
					onClick={() => setStateFeed('POPULAR')}
				>
					<LocalFireDepartmentIcon />
					Popular
				</Button>
				<Button
					className={display === 'RECENT' ? 'selected' : 'unselected'}
					size="large"
					onClick={() => setStateFeed('RECENT')}
				>
					<AccessTimeFilledIcon />
					Recent
				</Button>
				<Button
					className={display === 'YOUR_REPORTS' ? 'selected' : 'unselected'}
					size="large"
					onClick={() => setStateFeed('YOUR_REPORTS')}
				>
					<ViewTimelineIcon />
					Your Recent
				</Button>
			</div>

			<div className="feed">
				<h2>{singleReview}</h2>
			</div>
		</Grid>
	);
};

export default function Report() {
	return <ReportStyled />;
}
