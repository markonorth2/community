import { Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { Box } from '@material-ui/core';

import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import '../styles/Authentication.css';

import earth from '../images/earth.jpg';

const useStyles = makeStyles({
  authenticationEmail: {
    marginTop: 25
  },
  authenticationPassword: {
    marginTop: 10,
    marginBottom: 10
  },
  signUpBtn: {
    width: 190,
    margin:"auto"
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
		<Box container>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					width: 400,
					margin: 'auto',
					marginTop: 80
				}}
			>
				<Typography align="center">Spend less on your everyday needs</Typography>
				<AuthenticationEmailStyled type={'email'} />

				<AuthenticationPasswordStyled type={'password'} />
				<LoginButtonStyled />

				<Link to="/home">Login</Link>
			</Box>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					paddingTop: 50,
					width: 'auto',
					marginTop: 150,
					borderTop: '1px solid lightgrey',
					height: 500
				}}
			>
				<Typography align="center">How You Can Participate in The Community!</Typography>
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
					<Box className="logo-steps">
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
	);
}

export default Authentication;