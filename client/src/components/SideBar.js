import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import '../styles/SideBar.css';

import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';
import {Link} from "react-router-dom";

import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

//sample template to Add/Edit tables in server, delete for production
// `users/1` means to editing id = 1 from users table if id = 1 doesn't exist, system will add a new row with id = 1(create new)
//possible table users, businesses, reports, services, categories, reward_points, ratings,
function testAddEditAxios() {
	return axios.put(`/users/1`, {
		first_name: 'Daniel',
		last_name: 'Lu',
		email: 'daniel@hotmail.com',
		user_name: 'daniel_lu',
		password: '0000',
		description: 'dev of this app',
		image_url: 'null'
	});
}

//sample template to Delete tables in server, delete for production
// `users/1` means to delete the row with id = 1 in the users table
function testDeleteAxios() {
	return axios.delete('/users/1');
}

const theme = createTheme({
	palette: {
		primary: {
			main: '#6096BA'
		},
		secondary: {
			main: '#6EEB83'
		}
	}
});

const useStyles = makeStyles({
	sideBar: {
		marginRight: 125
	},
	side: {
		backgroundColor: 'white',
		marginRight: -25,
		border: '1px solid lightgray'
	},
	icons: {
		color: '#6096BA'
	}
});

function SideBarStyled() {
	const classes = useStyles();
	return (
		<Grid item md={2} lg={1} xs={5} className={classes.sideBar}>
			<List className={classes.side}>
				<ListItem
					button
					component={Link} to="/"
					divider
					className={classes.sideBarItem}
					// onClick={() => {
					// 	alert('clicked');
					// }}
				>
					<ListItemIcon>
						<HomeIcon className={classes.icons} />

						{/* <ListItemText primary="Home" /> */}
						<Typography
							style={{
								fontFamily: 'Comfortaa'
							}}
						>
							Home
						</Typography>
					</ListItemIcon>
				</ListItem>

				<ListItem
					button
					divider
					className={classes.sideBarItem}
					onClick={() => {
						alert('clicked');
					}}
				>
					<ListItemIcon>
						<span class="material-icons">public</span>

						<Typography
							style={{
								fontFamily: 'Comfortaa'
							}}
						>
							Communities
						</Typography>
					</ListItemIcon>
				</ListItem>

				<ListItem
					button
					divider
					className={classes.sideBarItem}
					component={Link} to="/categories"
					onClick={() => {
						testAddEditAxios();
					}}
				>
					<ListItemIcon>
						<CategoryIcon className={classes.icons} />
						{/* For production, please delete contents inside the ( ) below  */}
						{/* <ListItemText primary="Categories (TEMP ADD/EDIT BUTTON)" /> */}
						<Typography
							style={{
								fontFamily: 'Comfortaa'
							}}
						>
							Categories
						</Typography>
					</ListItemIcon>
				</ListItem>

				<ListItem
					button
					component={Link} to="/services"
					divider
					className={classes.sideBarItem}
					onClick={() => {
						testDeleteAxios();
					}}
				>
					<ListItemIcon>
						<span class="material-icons">medical_services</span>
						{/* For production, please delete contents inside the ( ) below  */}

						<Typography
							style={{
								fontFamily: 'Comfortaa'
							}}
						>
							Services
						</Typography>
					</ListItemIcon>
				</ListItem>

				<ListItem
					button
					divider
					className={classes.sideBarItem}
					onClick={() => {
						alert('clicked');
					}}
				>
					<ListItemIcon>
						<PeopleIcon className={classes.icons} />
						{/* <ListItemText primary="Friends" /> */}
						<Typography
							style={{
								fontFamily: 'Comfortaa'
							}}
						>
							Friends
						</Typography>
					</ListItemIcon>
				</ListItem>

				<ListItem
					button
					className={classes.sideBarItem}
					onClick={() => {
						alert('clicked');
					}}
				>
					<ListItemIcon>
						<span class="material-icons">help</span>
						{/* <ListItemText primary="Help" /> */}
						<Typography
							style={{
								fontFamily: 'Comfortaa'
							}}
						>
							Help
						</Typography>
					</ListItemIcon>
				</ListItem>
			</List>
		</Grid>
	);
}

export default function SideBar() {
	return <SideBarStyled />;
}
