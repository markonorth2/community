import { Avatar, Box, Card, CardHeader } from '@material-ui/core';
import React from 'react';
import '../styles/App.css';

import Header from './Header';
import Report from './Report';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { CardContent } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';

import ListItemButton from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#736372'
		},
		secondary: {
			main: '#DCEED1'
		}
	}
});

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: 25,

	},
	sideBar: {
		marginRight: 100,
		
	}
});

function SideBarStyled() {
	const classes = useStyles();
	return (
		<Grid item md={1} className={classes.sideBar}>
			<List>
				<ListItem button divider>
					<ListItemIcon>
						<HomeIcon />
						<ListItemText primary="Home" />
					</ListItemIcon>
				</ListItem>

				<ListItem button divider>
					<ListItemIcon>
						<PeopleIcon />
						<ListItemText primary="Communities" />
					</ListItemIcon>
				</ListItem>

				<ListItem button>
					<ListItemIcon>
						<CategoryIcon />
						<ListItemText primary="Categories" />
					</ListItemIcon>
				</ListItem>
			</List>
		</Grid>
	);
}

function ReportStyled() {
	const classes = useStyles();
	return (
		<Grid item md={4} className={classes.sideBar}>
			<Card>
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
			</Card>
		</Grid>
	);
}

function GridContainerStyled() {
	const classes = useStyles();
	return (
		<Grid container spacing={2} className={classes.root}>

				<SideBarStyled />
				<ReportStyled />

				<Grid item md={2}>
					<Paper>3</Paper>
				</Grid>

		</Grid>
	);
}

function App() {
	return (
		<section>
			<Header />
			<GridContainerStyled />
		</section>
	);
}

export default App;
