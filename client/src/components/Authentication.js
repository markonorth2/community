import { Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { Box } from '@material-ui/core';

import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import '../styles/Authentication.css';

import Header from './Header';

import earth from '../images/earth.jpg';

const useStyles = makeStyles({
	authenticationEmail: {
		marginTop: 25,
		width: 190
	},
	authenticationPassword: {
		marginTop: 10,
		marginBottom: 10
	},
	signUpBtn: {
		width: 190,
		margin: 'auto'
	}
});

function LoginButtonStyled() {
	const classes = useStyles();
	return (
		<Button
			variant="contained"
			color="secondary"
			onClick={() => {
				alert('clicked');
			}}
			className={classes.signUpBtn}
		>
			Sign Up<span class="material-icons">email</span>
		</Button>
	);
}

function AuthenticationEmailStyled() {
	const classes = useStyles();
	return (
		<TextField
			id="outlined-basic"
			label="Create account with Email"
			variant="outlined"
			size={'small'}
			color="secondary"
			className={classes.authenticationEmail}
		/>
	);
}

function AuthenticationPasswordStyled() {
	const classes = useStyles();
	return (
		<TextField
			id="outlined-basic"
			label="Password"
			variant="outlined"
			size={'small'}
			color="secondary"
			className={classes.authenticationPassword}
		/>
	);
}

function Authentication() {
	return (
		<>
		<Header />
		<Box
			container
			sx={{
				bgcolor: '#FFFFFF'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					width: 1200,
					margin: 'auto',
          paddingTop:60
				}}
			>
				<Typography
					variant="h3"
					align="center"
					style={{
					marginBottom: 100,
          color:"#7CA352",
          fontFamily:'Concert One'
					}}
				>
					Welcome to Community, THE platform for EVERYONE to Gather and bring power back to consumers' hands!
				</Typography>

				<Button
					type="submit"
					color="secondary"
					variant="contained"
					style={{
						// borderRadius: 35,
						backgroundColor: '#7CA352',
						padding: '18px 36px',
						fontSize: '18px',
						width: 500,
						margin: 'auto',
						marginTop: 10,
						marginBottom: 10
					}}
					href="/signin"
				>
					Sign In
				</Button>
				<Button
					type="submit"
					variant="contained"
					sx={{ mt: 5, mb: 2 }}
					color="secondary"
					href="/signup"
					style={{
						// borderRadius: 35,
						backgroundColor: '#7CA352',
						padding: '18px 36px',
						fontSize: '18px',
						width: 500,
						margin: 'auto',
						marginTop: 10,
						marginBottom: 10
					}}
				>
					Create an account
				</Button>
				<Button
					type="submit"
					variant="contained"
					sx={{ mt: 5, mb: 2 }}
					color="secondary"
					href="/home"
					style={{
						// borderRadius: 35,
						backgroundColor: '#7CA352',
						padding: '18px 36px',
						fontSize: '18px',
						width: 500,
						margin: 'auto',
						marginTop: 10,
						marginBottom: 10
					}}
				>
					Explore the community
				</Button>
				<Button
					type="submit"
					align="center"
					variant="contained"
					sx={{ mt: 5, mb: 2 }}
					color="secondary"
					href="/report"
					style={{
						// borderRadius: 35,
						backgroundColor: '#7CA352',
						padding: '18px 36px',
						fontSize: '18px',
						width: 500,
						margin: 'auto',
						marginTop: 10,
						marginBottom: 10
					}}
				>
					Contribute to the community
				</Button>
			</Box>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					paddingTop: 50,
					width: 'auto',
					marginTop: 150,
					borderTop: '1px solid lightgrey',
					height: 400,
					bgcolor: '#7CA352'
				}}
			>
				<Typography variant="h5" align="center" style={{
          color:"#FFFFFF"
        }}>
					How You Can Contribute to The Community!{' '}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						paddingTop: 100,
						gridGap: 100
					}}
				>
					<Box className="logo-steps">
						<span class="material-icons">edit_note</span>
						<Typography>Create a report</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignContent: 'center',
							flexDirection: 'column',
							justifyContent: 'center'
						}}
						className="logo-steps"
					>
						<span class="material-icons">question_answer</span>
						<Typography>Dicuss in the community</Typography>
					</Box>
					<Box className="logo-steps">
						<span class="material-icons">paid</span>
						<Typography>Save money together!</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
		</>
	);
}

export default Authentication;
