import React from 'react';
import { useNavigate } from 'react-router';

import '../styles/Header.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Toolbar } from '@material-ui/core';
import { AppBar, Box, Typography } from '@material-ui/core';

import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

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
	textField: {
		width: 450,
		marginLeft: 7
	},
	businessSearch: {
		color: '#FFFFFF',
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#FFFFFF'
		},
		width: 400,
		marginTop: 4,
		marginLeft: 7
	},
	searchButton: {
		marginLeft: 7,
		height: 39,
		marginTop: 4
	},
	logButtons: {
		marginLeft: 7,
		height: 39,
		marginTop: 4,
		width:70,
	},
	menu: {
		width: 300,
		marginLeft: 7,
		marginRight: 7,
		marginTop: 20,
		color: '#FFFFFF'
	},
	locationSearch: {
		color: '#FFFFFF',
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#FFFFFF'
		},
		width: 250,
		marginTop: 4,
		marginLeft: 7
	},

	logo: {
		color: '#FFFFFF',
		marginRight: 7,
		'&:hover': {
			color: '#DCE3E5'
		},
		fontFamily: 'Concert One'
	}
});

function TextFieldStyled() {
	const classes = useStyles();
	return (
		<TextField
			id="outlined-basic"
			label="Search for a Service or Business!"
			placeholder="e.g., Massage or McDonald's"
			variant="outlined"
			size={'small'}
			InputLabelProps={{
				style: {
					color: '#FFFFFF'
				}
			}}
			InputProps={{
				style: {
					color: '#FFFFFF'
				}
			}}
			className={classes.businessSearch}
		/>
	);
}

function LocationFieldStyled() {
	const classes = useStyles();
	return (
		<TextField
			variant="outlined"
			label="Choose a City (Optional)"
			size={'small'}
			color="#FFFFFF"
			InputLabelProps={{
				style: {
					color: '#FFFFFF'
				}
			}}
			InputProps={{
				style: {
					color: '#FFFFFF'
				}
			}}
			className={classes.locationSearch}
		/>
	);
}
function CategorySearchStyled() {
	const classes = useStyles();
	return (
		<TextField
			variant="outlined"
			label="Choose a Category (Optional)"
			size={'small'}
			color="#FFFFFF"
			InputLabelProps={{
				style: {
					color: '#FFFFFF'
				}
			}}
			InputProps={{
				style: {
					color: '#FFFFFF'
				}
			}}
			className={classes.locationSearch}
		/>
	);
}
function SearchButtonStyled() {
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
function LoginButtonStyled() {
	// const navigate = useNavigate()
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Button
				variant="contained"
				color="secondary"
				// onClick={() => navigate('/report')}
				className={classes.logButtons}
			>
				Login
			</Button>
		</ThemeProvider>
	);
}
function LogoutButtonStyled() {
	// const navigate = useNavigate()
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Button
				variant="contained"
				color="secondary"
				// onClick={() => navigate('/report')}
				className={classes.logButtons}
			>
				Logout
			</Button>
		</ThemeProvider>
	);
}

// function MenuStyled() {
// 	const classes = useStyles();
// 	return (
// 		<FormControl color="primary" variant="outlined" size={'small'}>
// 			<InputLabel id="demo-simple-select-label">Categories</InputLabel>
// 			<Select
// 				labelId="demo-simple-select-label"
// 				id="demo-simple-select"
// 				value={'Medical'}
// 				label="Categories"
// 				className={classes.menu}
// 				color="#FFFFFF"
// 				// onChange={handleChange}
// 			>
// 				<MenuItem value={'Medical'}>Medical</MenuItem>
// 				<MenuItem value={'Technology'}>Technology</MenuItem>
// 				<MenuItem value={'Engineering'}>Engineering</MenuItem>
// 				<MenuItem value={'Costmetics'}>Costmetics</MenuItem>
// 			</Select>
// 		</FormControl>
// 	);
// }

function Header() {
	const classes = useStyles();
	// const navigate = useNavigate();
	return (
		<ThemeProvider theme={theme}>
			<AppBar position="static" className="appbar">
				<Toolbar>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'row',
							margin: 'auto'
						}}
					>
						<Typography
							variant="h5"
							noWrap
							component="div"
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
							className={classes.logo}
							// onClick={() => {
							// 	navigate('/')
							// }}
						>
							Community
						</Typography>
						<Box
							sx={{
								flexGrow: 2
							}}
						>
							<TextFieldStyled />
						</Box>
						<Box
							sx={{
								flexGrow: 1
							}}
						>
							<CategorySearchStyled />
						</Box>
						<Box
							sx={{
								flexGrow: 1
							}}
						>
							<LocationFieldStyled />
						</Box>
						<Box
							sx={{
								flexGrow: 1
							}}
						>
							<SearchButtonStyled />
						</Box>
						<Box
							sx={{
								flexGrow: 1
							}}
						>
							<LoginButtonStyled />
						</Box>
						<Box
							sx={{
								flexGrow: 1
							}}
						>
							<LogoutButtonStyled />
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default Header;
