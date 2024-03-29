import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './Header';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      
        Created by Daniel Lu, Mark Chuang, Jaylen Patterson 
      {" "}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function SignUp() {
	const navigate = useNavigate();

  const [filledForm, setFilledForm] = React.useState(true)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      first_name: data.get('firstName'),
      last_name: data.get('lastName'),
      user_name: data.get('userName')
    });
    let userObj = { first_name: data.get('firstName'), last_name: data.get('lastName'), user_name: data.get('userName'), password: data.get('password'), email: data.get('email') }
    if (userObj.first_name && userObj.last_name && userObj.user_name && userObj.password && userObj.email) {
      return axios.post('users/signup', userObj)
      .then(() => {
        navigate('/home')
      })
    } else {
      setFilledForm(false);
      navigate('/signup')
    }
    
  };

  return (
    <>
    <Header />
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#7CA352' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5"  style={{
								fontFamily: 'Comfortaa'
							}}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {filledForm === true &&
              <>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="userName"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </>
            }
            
            {filledForm === false &&
              <>
              <Grid item xs={12} sm={6}>
                <TextField
                  error
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="filled-error-helper-text"
                  label="First Name Error"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error
                  required
                  fullWidth
                  id="filled-error-helper-text"
                  label="Last Name Error"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error
                  required
                  fullWidth
                  id="filled-error-helper-text"
                  label="Email Address Error"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error
                  required
                  fullWidth
                  id="filled-error-helper-text"
                  label="Username Error"
                  name="userName"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error
                  required
                  fullWidth
                  name="password"
                  label="Password Error"
                  type="password"
                  id="filled-error-helper-text"
                  autoComplete="new-password"
                />
              </Grid>
            </>
            }

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2, backgroundColor:"#7CA352" }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </>
	
	);
}

export default SignUp;