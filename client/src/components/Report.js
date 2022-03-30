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
import { color } from '@mui/system';

import { Rating } from '@mui/material';

const useStyles = makeStyles({
	report: {
		marginRight: 100
	},
	newReport: {
		// width: 611,
		marginBottom: 20,
		backgroundColor: '#FFFFFF',
		width: '100%'
	},
	communityToday: {
		marginBottom: 25
	},
	highRating: {
		color: '#6096BA;'
	},
	lowRating: {
		color: 'orange'
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

const searchQuery = (search) => {};

const ReportStyled = (props) => {
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
					console.log(props.search);

					//sets data
					setDisplayReport(reports.data);

					//sets visual
					setDisplay(actionType);
				});

			case 'RECENT':
				return axios.get(`/reports/recent`).then((reports) => {
					setDisplayReport(reports.data);
					setDisplay(actionType);
				});

			// case 'YOUR_REPORTS':
			// 	return axios.get(`/reports/your_reports`).then((reports) => {
			// 		setDisplayReport(reports.data);
			// 		setDisplay(actionType);
			// 	});

			default:
				return axios.get(`/reports/popular`).then((reports) => {
					setDisplayReport(reports.data);
					setDisplay(actionType);
				});
		}
	};

	const singleReview = displayReport
		.filter((val) => {
			const userSearch = props.search;
			if (
				val.businessname.toLowerCase().includes(userSearch.toLowerCase()) ||
				val.servicename.toLowerCase().includes(userSearch.toLowerCase())
			) {
				return val;
			}
		})
		.map((report) => {
			console.log('report', report);
			const letter = report.username[0];
			return (
				<div className="report">
					<CardHeader
						avatar={<Avatar>{letter}</Avatar>}
						action={
							<IconButton aria-label="settings">
								<MoreVertIcon />
							</IconButton>
						}
						title={
							<Typography
								style={{
									fontFamily: 'Comfortaa',
									color: '#7CA352'
								}}
							>
								{report.businessname} - {report.servicename} - {report.price}
							</Typography>
						}
						subheader={
							<Typography
								variant="subtitle2"
								style={{
									fontFamily: 'Comfortaa',
									color: '#7CA352'
								}}
							>
								{report.timestamp.substr(0, 10)}
							</Typography>
						}
					/>
					<CardContent>
						<Typography
							variant="subtitle2"
							style={{
								fontFamily: 'Comfortaa'
							}}
							className={report.productrating && report.servicerating > 5 ? classes.highRating : classes.lowRating}
						>
							Product Rating: {report.productrating}
							<br />
							Service Rating: {report.servicerating}
						</Typography>
						<Typography
							variant="subtitle2"
							style={{
								fontFamily: 'Comfortaa'
							}}
						>
							Date of Visit: {report.reportdate.substr(0, 10)}
						</Typography>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							style={{
								fontFamily: 'Comfortaa'
							}}
						>
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
					<Typography
						style={{
							fontFamily: 'Comfortaa'
						}}
					>
						popular
					</Typography>
				</Button>
				<Button
					className={display === 'RECENT' ? 'selected' : 'unselected'}
					size="large"
					onClick={() => setStateFeed('RECENT')}
				>
					<AccessTimeFilledIcon />
					<Typography
						style={{
							fontFamily: 'Comfortaa'
						}}
					>
						recent
					</Typography>
				</Button>
				{/* <Button
					className={display === 'YOUR_REPORTS' ? 'selected' : 'unselected'}
					size="large"
					onClick={() => setStateFeed('YOUR_REPORTS')}
				>
					<ViewTimelineIcon />
					<Typography
						style={{
							fontFamily: 'Comfortaa'
						}}
					>
						your recent
					</Typography>
				</Button> */}
			</div>

			<div className="feed">
				<h2>{singleReview}</h2>
			</div>
		</Grid>
	);
};

export default function Report(props) {
	return <ReportStyled search={props.search} />;
}
