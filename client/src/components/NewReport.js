import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import CurrencyTextField from "@unicef/material-ui-currency-textfield"; // need to install with --legacy-peer-deps

// date-fns
import AdapterDateFns from "@mui/lab/AdapterDateFns"; // npm i @mui/lab
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

// Need to use npm install --legacy-peer-deps when installing CurrencyTextField

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Created by Daniel Lu, Mark Chuang, Jaylen Patterson{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};


function NewReportContainer() {
	return (
		console.log("Hi")
	)

}

const theme = createTheme();

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

function NewReport() {
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState();
  const [date, setDate] = React.useState(null);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <TextSnippetIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create a New Report
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
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
                  name="City"
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
                  <FormHelperText>
                    Select a category that best fits the service received
                  </FormHelperText>
                </FormControl>
              </Grid>
              {/* <Grid item xs={12}>
                <TextField 
									type="number"
                  required
                  fullWidth
                  id="price"
                  label="Price (Please enter a number)"
                  name="Price"
									placeholder="e.g., 50"
                />
              </Grid> */}
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
                <Button variant="contained" component="label">
                  Upload Your Receipt
                  <input type="file" />
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

              <Grid
                item
                xs={12}
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend">
                  Customer Service Rating (Out of 10)
                </Typography>
                <StyledRating
                  name="customer_service_rating"
                  defaultValue={2}
                  max={10}
                  getLabelText={(value) =>
                    `${value} Heart${value !== 1 ? "s" : ""}`
                  }
                  precision={0.5}
                  icon={<FavoriteIcon fontSize="inherit" />}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
                <Typography component="legend">
                  Product Rating (Out of 10)
                </Typography>
                <Rating
                  name="product_rating"
                  defaultValue={2}
                  max={10}
                  precision={0.5}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I understand I am helping to make the world a better place."
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2 }}
              href="/home"
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

export default { NewReport, NewReportContainer } 
