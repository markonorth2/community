import {React, useState} from 'react';

import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import '../styles/App.css';

import { Grid } from '@material-ui/core';

import Report from './Report';
import SideBar from './SideBar';
import CommunityToday from './CommunityToday';
import Authentication from './Authentication';

import SignIn from './SignIn';

import { Link } from 'react-router-dom';
import HeaderLogged from './HeaderLogged';



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
		backgroundColor: '#DCE3E5'
	},
	sideBar: {
		marginRight: 100
	}
});

// Container for all home page components
export function GridContainerStyled() {
	const [ search, setSearch ] = useState('');
	// const handleSubmit = function () {
	// 	console.log("search", search)
	// }
	const classes = useStyles();
	const test = "I AM HERE"
	return (
		<>
			<HeaderLogged setSearch={setSearch} />
			<Grid container spacing={0} className={classes.root}>
			<SideBar />
			<Report search={search} />
			<CommunityToday />
		
		</Grid>
		</>
	);
}

function App() {
	return <Authentication />;
}

export default App;

