import { Avatar, Box, Card, CardHeader } from '@material-ui/core';
import React from 'react';
import '../styles/App.css';

import Header from './Header';
import Report from './Report';

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
import Button from '@material-ui/core/Button';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';


import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import SideBar from './SideBar';

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
		marginTop: 0
	},
	sideBar: {
		marginRight: 100
	}
});

function GridContainerStyled() {
	const classes = useStyles();
	return (
		<Grid container spacing={2} className={classes.root}>
	
			
			<SideBar />
			<Report />

			<Grid item md={2}>
			<Typography>Community Today</Typography>
				<QuestionAnswerIcon />
				<Button size="small">Popular</Button>
				<Button size="small">Your Recent</Button>

				<Card>
					<CardHeader
						avatar={<Avatar>J</Avatar>}
						
						title="X-Ray @ Jr Hospital Was OVERPRICED!!!"
					/>
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit...
						</Typography>
					</CardContent>
				</Card>

				
				<Typography><PeopleIcon />Top Members</Typography>
				
				<Card>
					<CardHeader
						avatar={<Avatar>M</Avatar>}
						title="Michaela Palmer"
						subheader="172 Reports   52065 Candy"
					/>
				</Card>

				<Card>
					<CardHeader
						avatar={<Avatar>S</Avatar>}
						title="Samuel Brown"
						subheader="126 Reports   42656 Candy"
					/>
				</Card>

				<Card>
					<CardHeader
						avatar={<Avatar>L</Avatar>}
						title="Leon Task"
						subheader="89 Reports   25672 Candy"
					/>
				</Card>

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
