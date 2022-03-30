
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './Header';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      
        Created by Daniel Lu, Mark Chuang, Jaylen Patterson. Full Stack Software Developers.
      {" "}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();



function SignIn() {
	const navigate = useNavigate();
  const [auth, setAuth] = React.useState(true)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let authObj = {
      email: data.get('email'),
      loginPassword: data.get('password')
    }

    return axios.post('users/signin', authObj)
    .then((res) => {
      if (res.data.authIsTrue) {
        navigate('/home');
      } else {
        setAuth(false);
        navigate('/signin');
      }
    });
  };
  
  return (
    	<>
      <Header />
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#7CA352' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style={{
								fontFamily: 'Comfortaa'
							}}>
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              {auth === false && 
                <>
                <TextField
                error
                margin="normal"
                required
                fullWidth
                id="filled-error-helper-text"
                label="Email Error"
                name="email"
                autoComplete="email"
                autoFocus
              />
                <TextField
                error
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password Error"
                type="password"
                id="filled-error-helper-text"
                autoComplete="current-password"
              />
                </>}
              {auth === true &&
                <>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              </>
              }
              
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#7CA352' }}
                
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgotpassword" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
</>
	);
}

export default SignIn;