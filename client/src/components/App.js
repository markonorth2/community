import React from 'react';
import '../styles/App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


import Header from './Header'

import TextField from '@material-ui/core/TextField';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Box, colors, withWidth } from '@material-ui/core';

const theme = createTheme({
	palette: {
		primary: {
			main: '#DCEED1'
		},
		secondary: {
			main: '#736372'
		}
	}
});

const useStyles = makeStyles({
	root: {
		width: 450,
		marginRight: 20
	}
});

function TextFieldStyled() {
	const classes = useStyles();
	return (
		<TextField
			id="outlined-basic"
			label="Service, Corporation, Category"
			variant="outlined"
			className={classes.root}
		/>
	);
}
function ButtonStyled() {
	const classes = useStyles();
	return (
		<Button
			variant="contained"
			color="secondary"
			onClick={() => {
				alert('clicked');
			}}
		>
			Search
		</Button>
	);
}

function App() {
	return (
		<Header />
	);
}

export default App;
