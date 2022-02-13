import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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
		<div className="App">
			<header>
				<ThemeProvider theme={theme}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							padding: 20
						}}
					>
						<TextFieldStyled />
						<ButtonStyled />
					</Box>
				
				</ThemeProvider>
			</header>
		</div>
	);
}

export default App;
