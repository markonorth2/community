import React from 'react';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { Toolbar } from '@material-ui/core';

import '../styles/Header.css';

import Report from './Report';

import { AppBar, Box, colors, Typography, withWidth } from '@material-ui/core';

import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

import { IconButton } from '@material-ui/core';

const theme = createTheme({
	palette: {
		primary: {
			main: '#6096BA'
		},
		secondary: {
			main: '#FFFFFF'
		}
	}
});

const useStyles = makeStyles({
	root: {
		width: 450,
		marginLeft: 7,
	},
	searchButton: {
		marginLeft: 7,
		height: 39
	},
	menu: {
		width: 150,
		marginLeft: 7,
		marginRight: 7
	}
});

function TextFieldStyled() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<TextField
				id="outlined-basic"
				color="secondary"
				label="Service, Corporation, Category"
				variant="outlined"
				size={'small'}
				className={classes.root}
			/>
		</ThemeProvider>
	);
}
function ButtonStyled() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
		<Button
			variant="contained"
			color="secondary"
			onClick={() => {
				alert('clicked');
			}}
			className={classes.searchButton}
		>
			Search
		</Button>
		</ThemeProvider>
	);
}

function MenuStyled() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
		<FormControl color="primary" variant="outlined" size={'small'}>
			<InputLabel id="demo-simple-select-label">Categories</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={'Medical'}
				label="Categories"
				className={classes.menu}
				color="secondary"
				// onChange={handleChange}
			>
				<MenuItem value={'Medical'}>Medical</MenuItem>
				<MenuItem value={'Technology'}>Technology</MenuItem>
				<MenuItem value={'Engineering'}>Engineering</MenuItem>
				<MenuItem value={'Costmetics'}>Costmetics</MenuItem>
			</Select>
		</FormControl>
		</ThemeProvider>
	);
}

function Header() {
	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center'
				}}
			>
				<AppBar position="static">
					<Toolbar>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }} }
						>
							Community
						</Typography>
						<TextFieldStyled/>
						<MenuStyled />
						<TextField variant="outlined" label="Trenton, Ontario" color="secondary" size={'small'} />
						<ButtonStyled />
					</Toolbar>
				</AppBar>
			</Box>
		</ThemeProvider>
	);
}

export default Header;
