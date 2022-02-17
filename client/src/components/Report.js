import React from 'react';

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
import { recent } from '../actions';
import { popular } from '../actions';
import { your_recent } from '../actions';

const useStyles = makeStyles({
	report: {
		marginRight: 100
	},
	newReport: {
		width: 616,
		marginBottom: 20
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
			color="lightgrey"
			onClick={() => navigate('/report')}
		/>
	);
}

function ReportStyled() {
	const classes = useStyles();
	const display = useSelector((state) => state.display);
	const dispatch = useDispatch();
	return (
		<Grid item md={4} className={classes.report}>
			<CreateReportField />
			<div className="reportBtns">
				<Button size="large" onClick={() => dispatch(popular())}>
					<span class="material-icons">local_fire_department</span>
					Popular
				</Button>
				<Button size="large" onClick={() => dispatch(recent())}>
					<span class="material-icons">access_time_filled</span> Recent
				</Button>
				<Button size="large" onClick={() => dispatch(your_recent())}>
					<span class="material-icons">view_timeline</span> Your Recent
				</Button>
			</div>
			<div className="report">
				<CardHeader
					avatar={<Avatar>J</Avatar>}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="X-Ray @ Jr Hospital"
					subheader="January 26, 2022"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</Typography>
				</CardContent>
			</div>
			<div className="report">
				<CardHeader
					avatar={<Avatar>J</Avatar>}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="X-Ray @ Jr Hospital"
					subheader="January 26, 2022"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</Typography>
				</CardContent>
			</div>
			<div className="report">
				<CardHeader
					avatar={<Avatar>J</Avatar>}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="X-Ray @ Jr Hospital"
					subheader="January 26, 2022"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</Typography>
				</CardContent>
			</div>
			<div className="report">
				<CardHeader
					avatar={<Avatar>J</Avatar>}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="X-Ray @ Jr Hospital"
					subheader="January 26, 2022"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</Typography>
				</CardContent>
			</div>
			<div className="report">
				<CardHeader
					avatar={<Avatar>J</Avatar>}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="X-Ray @ Jr Hospital"
					subheader="January 26, 2022"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</Typography>
				</CardContent>
			</div>
			<div className="report">
				<CardHeader
					avatar={<Avatar>J</Avatar>}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="X-Ray @ Jr Hospital"
					subheader="January 26, 2022"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</Typography>
				</CardContent>
			</div>
		</Grid>
	);
}

export default function Report() {
	return <ReportStyled />;
}
