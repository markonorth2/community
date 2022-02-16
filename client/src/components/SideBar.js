import React from 'react';

import { Grid } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import '../styles/SideBar.css';

import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';

import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

import axios from "axios";

//sample template to Add/Edit tables in server, delete for production
// `users/1` means to editing id = 1 from users table if id = 1 doesn't exist, system will add a new row with id = 1(create new)
//possible table users, businesses, reports, services, categories, reward_points, ratings, 
function testEditAxios() {

	// return axios.put(`/users/1`, { 
	// 	first_name: 'Daniel',
	//   last_name: "Lu",
	//   email: "daniel@hotmail.com",
	//   user_name: "daniel_lu",
	//   password: "0000",
	//   description: "dev of this app",
	//   image_url: "null"})
	// .then((res) =>
	// console.log("user1 edited", res)			
// )

	  return axios.put(`/reward_points/1`, 
		{reward_point: 20
	})
		.then((res) =>
      console.log("user1 edited", res)			
		)
}

//sample template to Delete tables in server, delete for production
// `users/1` means to delete the row with id = 1 in the users table 
function testDeleteAxios() {
	return axios.delete('/reports/1')
};

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
	}
});

function SideBarStyled() {
	const classes = useStyles();
	return (
		<Grid item md={1} className={classes.sideBar}>
			<List>
				<ListItem button divider className={classes.sideBarItem} onClick={() => {
					testEditAxios();
				}}>
					<ListItemIcon>
						<HomeIcon className='material-icons' />
						<ListItemText primary="Home (testClick to ADD/Edit)" />
					</ListItemIcon>
				</ListItem>

				<ListItem button divider className={classes.sideBarItem} onClick={() => {
					testDeleteAxios();
				}} >
					
					<ListItemIcon>
						<span class="material-icons">public</span>
						<ListItemText primary="Communities (testClick to Delete)" />
					</ListItemIcon>
				</ListItem>

				<ListItem button divider className={classes.sideBarItem} onClick={() => {
					alert('clicked');
				}}>
					<ListItemIcon >
						<CategoryIcon className='material-icons' />

						<ListItemText primary="Categories" />
					</ListItemIcon>
				</ListItem>

				<ListItem button divider className={classes.sideBarItem} onClick={() => {
					alert('clicked');
				}}>
					<ListItemIcon>
						<span class="material-icons">medical_services</span>
						<ListItemText primary="Services" />
					</ListItemIcon>
				</ListItem>

				<ListItem button divider className={classes.sideBarItem} onClick={() => {
					alert('clicked');
				}}>
					<ListItemIcon>
						<PeopleIcon className='material-icons' />
						<ListItemText primary="Friends" />
					</ListItemIcon>
				</ListItem>

				<ListItem button divider className={classes.sideBarItem} onClick={() => {
					alert('clicked');
				}}>
					<ListItemIcon>
						<span class="material-icons">help</span>
						<ListItemText primary="Help" />
					</ListItemIcon>
				</ListItem>
			</List>
		</Grid>
	);
}

export default function SideBar() {
	return <SideBarStyled />;
}
