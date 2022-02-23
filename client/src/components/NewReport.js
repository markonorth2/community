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

import CurrencyTextField from '@unicef/material-ui-currency-textfield'; // need to install with --legacy-peer-deps

// date-fns
import AdapterDateFns from "@mui/lab/AdapterDateFns"; // npm i @mui/lab
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// Need to use npm install --legacy-peer-deps when installing CurrencyTextField

function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			Created by Daniel Lu, Mark Chuang, Jaylen Patterson {new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}


const theme = createTheme();

const StyledRating = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#ff6d75'
	},
	'& .MuiRating-iconHover': {
		color: '#ff3d47'
	}
});

function NewReport() {
  const [category, setCategory] = React.useState("");
  const [value, setValue] = React.useState();
  const [date, setDate] = React.useState(null);
  const [filledForm, setFilledForm] = React.useState(true);
	const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    //retrieve businesses info
    let businessObj = {
      category_id: category,
      name: data.get('Business Name'),
      city: data.get('City'),
      province_state: data.get('Province'),
      country: data.get('Country'),
      street_address: data.get('Address')
    };
    console.log('businessObj', businessObj);
    
    //retrieve services info
    let serviceObj = {
      category_id: category,
      name: data.get('Service'),
    };
    console.log('serviceObj', serviceObj);
    
    //retrieve reports info
    let reportObj = {
      review: data.get('Review'),
      price: value,
      date: date
    }
    console.log("reportObj", reportObj)
    //retrieve ratings info
    let ratingObj = {
      customer_service_rating: data.get('customer_service_rating'),
      product_rating: data.get('product_rating')
    }
    console.log("ratingObj", ratingObj)
    //chaining axios to insert into four tables in order
    let businessId = '';

    if (businessObj.name && businessObj.city && businessObj.province_state && businessObj.country && businessObj.street_address && serviceObj.name && reportObj.review && reportObj.price && reportObj.date && ratingObj.customer_service_rating && ratingObj.product_rating) {
      axios.post('/businesses/new', businessObj)
    .then((res) => {
      console.log("axios businesses new")
      businessId = res.data.id;
      return axios.post('/services/new', serviceObj);
    })
    .then((res) => {
      console.log('creating report', res.data.id);
      return axios.post('/reports/new', {
        ...reportObj,
        business_id: businessId,
        service_id: res.data.id
      });
    })
    .then((res) => {
      console.log('creating ratings', res);
      return axios.post('/ratings/new', {
        ...ratingObj,
        business_id: businessId,
        report_id: res.data.id
      });
    })
    .then(() => {
      navigate('/home');
    })
    .catch((err) => {console.log(err)});
		} else {
			setFilledForm(false);
			navigate('/report');
		}

    

    
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
						alignItems: 'center'
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: '#7CA352'  }}>
						<TextSnippetIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Create a New Report
					</Typography>
					<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							{filledForm === true &&
							<>
							<Grid item xs={12}>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										fullWidth
										label="Date of Visit"
										value={date}
										onChange={(newValue) => {
											setDate(newValue);
										}}
										renderInput={(params) => <TextField {...params} />}
									/>
								</LocalizationProvider>
							</Grid>

							<Grid item xs={12}>
								<TextField
									name="Business Name"
									required
									fullWidth
									id="businessName"
									label="Business Name"
									autoFocus
									placeholder="e.g., McDonald's"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									name="Address"
									required
									fullWidth
									id="businessName"
									label="Address of Business"
									autoFocus
									placeholder="e.g., 9999 Finch Avenue"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									name="City"
									required
									fullWidth
									id="city"
									label="City"
									autoFocus
									placeholder="e.g., Toronto or Log Angeles"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									name="Province"
									required
									fullWidth
									id="city"
									label="Province/State"
									autoFocus
									placeholder="e.g., Ontario or California"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									name="Country"
									required
									fullWidth
									id="city"
									label="Country"
									autoFocus
									placeholder="e.g., Canada or United States"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="service"
									label="Service Received"
									placeholder="e.g., X-ray or Teeth-Cleaning"
									name="Service"
								/>
							</Grid>

              <Grid item xs={12}>
                <FormControl fullWidth={true}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={category}
                    label="Category"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Health Care</MenuItem>
                    <MenuItem value={2}>Automobile Sales</MenuItem>
                    <MenuItem value={3}>Education</MenuItem>
                    <MenuItem value="">
                      <em>Other</em>
                    </MenuItem>
                  </Select>
                  <FormHelperText>
                    Select a category that best fits the service received
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <CurrencyTextField
                  label="Price of the service"
                  variant="standard"
                  value={value}
                  currencySymbol="$"
                  outputFormat="number"
                  onChange={(event, value) => setValue(value)}
                  placeholder="e.g., $50"
                  textAlign="left"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" component="label" sx={{ bgcolor: '#7CA352'  }}>
                  Upload Your Receipt
                  <input type="file" />
                </Button>
               
              </Grid>

							<Grid item xs={12}>
								<CurrencyTextField
									label="Price of the service"
									variant="standard"
									value={value}
									currencySymbol="$"
									outputFormat="number"
									onChange={(event, value) => setValue(value)}
									placeholder="e.g., $50"
									textAlign="left"
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<Button variant="contained" component="label" sx={{ bgcolor: '#7CA352'  }}>
									Upload Your Receipt
									<input type="file" hidden />
								</Button>
							</Grid>

							<Grid item xs={12}>
								<TextField
									fullWidth
									id="review"
									label="Review (Describe your experience...)"
									name="Review"
									multiline={true}
									rows={4}
									placeholder="e.g., The massage felt really good. However, the masseuse had a really bad attitude. This is why I gave a good product rating but a bad customer service rating."
								/>
							</Grid>
							</>
							}

              {filledForm === false &&
							<>
							<Grid item xs={12}>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										error
										fullWidth
										label="Date of Visit Error"
										value={date}
										onChange={(newValue) => {
											setDate(newValue);
										}}
										renderInput={(params) => <TextField {...params} />}
									/>
								</LocalizationProvider>
							</Grid>

							<Grid item xs={12}>
								<TextField
									error
									name="Business Name"
									required
									fullWidth
									id="filled-error-helper-text"
									label="Business Name Error"
									autoFocus
									placeholder="e.g., McDonald's"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									error
									name="Address"
									required
									fullWidth
									id="filled-error-helper-text"
									label="Address of Business Error"
									autoFocus
									placeholder="e.g., 9999 Finch Avenue"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									error
									name="City"
									required
									fullWidth
									id="filled-error-helper-text"
									label="City Error"
									autoFocus
									placeholder="e.g., Toronto or Log Angeles"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									error
									name="Province"
									required
									fullWidth
									id="filled-error-helper-text"
									label="Province/State Error"
									autoFocus
									placeholder="e.g., Ontario or California"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									error
									name="Country"
									required
									fullWidth
									id="filled-error-helper-text"
									label="Country Error"
									autoFocus
									placeholder="e.g., Canada or United States"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									error
									required
									fullWidth
									id="filled-error-helper-text"
									label="Service Received Error"
									placeholder="e.g., X-ray or Teeth-Cleaning"
									name="Service"
								/>
							</Grid>

              <Grid item xs={12}>
                <FormControl fullWidth={true}>
                  <InputLabel 
									  error
										id="filled-error-helper-text">
                    Category Error
                  </InputLabel>
                  <Select
										labelId="filled-error-helper-text"
                    
                    value={category}
                    label="Category"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Health Care</MenuItem>
                    <MenuItem value={2}>Automobile Sales</MenuItem>
                    <MenuItem value={3}>Education</MenuItem>
                    <MenuItem value="">
                      <em>Other</em>
                    </MenuItem>
                  </Select>
                  <FormHelperText>
                    Select a category that best fits the service received
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <CurrencyTextField
                  error
									label="Error: Price of the service"
                  variant="standard"
                  value={value}
                  currencySymbol="$"
                  outputFormat="number"
                  onChange={(event, value) => setValue(value)}
                  placeholder="e.g., $50"
                  textAlign="left"
                  fullWidth
									id="demo-simple-select-helper"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" component="label" sx={{ bgcolor: '#7CA352'  }}>
                  Upload Your Receipt
                  <input type="file" />
                </Button>
               
              </Grid>

							<Grid item xs={12}>
								<CurrencyTextField
									error
									label="Error: Price of the service"
									variant="standard"
									value={value}
									currencySymbol="$"
									outputFormat="number"
									onChange={(event, value) => setValue(value)}
									placeholder="e.g., $50"
									textAlign="left"
									fullWidth
									id="demo-simple-select-helper"
								/>
							</Grid>
							<Grid item xs={12}>
								<Button variant="contained" component="label" sx={{ bgcolor: '#7CA352'  }}>
									Upload Your Receipt
									<input type="file" hidden />
								</Button>
							</Grid>

							<Grid item xs={12}>
								<TextField
									error
									fullWidth
									id="demo-simple-select-helper"
									label="Error: Review (Describe your experience...)"
									name="Review"
									multiline={true}
									rows={4}
									placeholder="e.g., The massage felt really good. However, the masseuse had a really bad attitude. This is why I gave a good product rating but a bad customer service rating."
								/>
							</Grid>
							</>
							}
							<Grid
								item
								xs={12}
								sx={{
									'& > legend': { mt: 2 }
								}}
							>
								<Typography component="legend">Customer Service Rating (Out of 10)</Typography>
								<StyledRating
									
									name="customer_service_rating"
									defaultValue={2}
									max={10}
									getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
									precision={0.5}
									icon={<FavoriteIcon fontSize="inherit" />}
									emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
									
								/>
								<Typography component="legend">Product Rating (Out of 10)</Typography>
								<Rating 
									name="product_rating" 
									defaultValue={2} 
									max={10} 
									precision={0.5} 
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
              sx={{ mt: 5, mb: 2, bgcolor: '#7CA352' }}
              
              >
							Submit Report
						</Button>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	);
}

export default NewReport;
