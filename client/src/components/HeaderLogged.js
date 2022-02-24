import React from 'react';

import '../styles/Header.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Toolbar } from '@material-ui/core';
import { AppBar, Box, Typography } from '@material-ui/core';

import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

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
		paddingLeft: 10,
		color: 'white'
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

function TextFieldStyled(props) {
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
			onChange={(event) => {
				props.setSearch(event.target.value);
			}}
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
					alert('button clicked!');
				}}
				className={classes.searchButton}
			>
				Search
			</Button>
		</ThemeProvider>
	);
}

function LogoutButtonStyled() {
	// const navigate = useNavigate()
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			{/* <Button
				variant="contained"
				color="secondary"
				
				// onClick={() => navigate('/')}
				className={classes.logButtons}
			>
				Logout
			</Button> */}
			<Link to="/signin" className={classes.logButtons}>
				Logout
			</Link>
		</ThemeProvider>
	);
}

function HeaderLogged(props) {
	const classes = useStyles();
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
							// 	console.log(props.test);
							// }}
						>
							Community
						</Typography>

						<Box
							sx={{
								flexGrow: 2
							}}
						>
							<TextFieldStyled setSearch={props.setSearch} />
						</Box>
						<Box
							sx={{
								flexGrow: 1
							}}
						>
							{/* <CategorySearchStyled /> */}
						</Box>
						<Box
							sx={{
								flexGrow: 1
							}}
						>
							{/* <LocationFieldStyled /> */}
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
							{/* <LoginButtonStyled /> */}
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

export default HeaderLogged;
