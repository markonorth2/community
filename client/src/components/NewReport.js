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
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



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

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

function NewReport() {

	const [age, setAge] = React.useState('');
	const handleChange = (event) => {
	setAge(event.target.value);
	};

	const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <TextSnippetIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Create a New Report
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  name="Business Name"
                  required
                  fullWidth
                  id="businessName"
                  label="Business Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="service"
                  label="Service Received (E.g., X-ray)"
                  name="Service"
                />
              </Grid>
							
							<Grid item xs={12} >
							<FormControl fullWidth={true}>
								<InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
									<Select
										labelId="demo-simple-select-helper-label"
										id="demo-simple-select-helper"
										value={age}
										label="Category"
										onChange={handleChange}
									>
									
									<MenuItem value={10}>Dentistry</MenuItem>
									<MenuItem value={20}>Hospital care</MenuItem>
									<MenuItem value={30}>Massage</MenuItem>
									<MenuItem value="">
									<em>Other</em>
									</MenuItem>
				
									</Select>
								<FormHelperText>Select a category that best fits the service received</FormHelperText>
							</FormControl>
    					</Grid>
              <Grid item xs={12}>
                <TextField 
									type="number"
                  required
                  fullWidth
                  id="price"
                  label="Price (Please enter a number)"
                  name="Price"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="review"
                  label="Review (Describe your experience...)"
                  name="Review"
									multiline={true}
      						rows={4}
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
							
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I understand I am helping to make the world a better place."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2 }}
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
	
		
	);
}

export default NewReport;