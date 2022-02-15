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
import CommunityToday from './CommunityToday';

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
		paddingTop: 25,
		backgroundColor: "#DCE3E5"
	},
	sideBar: {
		marginRight: 100
	}
});

function GridContainerStyled() {
	const classes = useStyles();
	return (
		<Grid container spacing={0} className={classes.root}>
			<SideBar />
			<Report />
			<CommunityToday />
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
