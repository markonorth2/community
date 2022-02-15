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

function testEditAxios() {
  

	return axios.put(`/users/1`, { 
		first_name: 'Daniel',
	  last_name: "Lu",
	  email: "daniel@hotmail.com",
	  user_name: "daniel_lu",
	  password: "0000",
	  description: "dev of this app",
	  image_url: "null"})
		.then((res) =>
      console.log("user1 edited", res)			
		)
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
						<ListItemText primary="Home" />
					</ListItemIcon>
				</ListItem>

				<ListItem button divider className={classes.sideBarItem} onClick={() => {
					alert('clicked');
				}} >
					
					<ListItemIcon>
						<span class="material-icons">public</span>
						<ListItemText primary="Communities" />
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
