import React from 'react';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';



import '../styles/Header.css';

import Report from './Report'

import { Box, colors, Typography, withWidth } from '@material-ui/core';

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
		width: 450,
    marginLeft:7
	},
	searchButton: {
		marginLeft: 7,
    height:39
	},
  menu: {
    width:150,
    marginLeft:7,
    marginRight:7,
  }
  
});

function TextFieldStyled() {
	const classes = useStyles();
	return (
		<TextField
			id="outlined-basic"
			color="primary"
			label="Service, Corporation, Category"
			variant="outlined"
      size={"small"}
			className={classes.root}
		/>
	);
}
function ButtonStyled() {
	const classes = useStyles();
	return (
		<Button
			variant="contained"
			color="primary"
			onClick={() => {
				alert('clicked');
			}}
			className={classes.searchButton}
		>
			Search
		</Button>
	);
}

function MenuStyled() {
	const classes = useStyles();
	return (
		<FormControl color="primary" variant="outlined" size={"small"}>
			<InputLabel id="demo-simple-select-label">Categories</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={''}
				label="Categories"
				className={classes.menu }
				// onChange={handleChange}
			>
				<MenuItem value={'Medical'}>Medical</MenuItem>
				<MenuItem value={'Technology'}>Technology</MenuItem>
				<MenuItem value={'Engineering'}>Engineering</MenuItem>
				<MenuItem value={'Costmetics'}>Costmetics</MenuItem>
			</Select>
		</FormControl>
	);
}

function Header() {
	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					padding: 20,
          borderBottom: "solid lightgrey 1px"
				}}
			>
        <Typography align='center' variant='h4'>COMMUNITY</Typography>
				<TextFieldStyled />
        <MenuStyled />
        <TextField variant='outlined' label='Trenton, Ontario' color='primary' size={"small"}/>
				<ButtonStyled />


			</Box>
		</ThemeProvider>
	);
}

export default Header;
