import React from 'react';

import { Grid, Paper } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import '../styles/SideBar.css';

import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';
import { Card } from '@material-ui/core';

import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

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
		<Grid item md={1} className={classes.sideBar}>
			<div className={classes.side}>
				<List>
					<ListItem
						button
						divider
						className={classes.sideBarItem}
						onClick={() => {
							alert('clicked');
						}}
					>
						<ListItemIcon>
							<HomeIcon className={classes.icons} />
							<ListItemText primary="Home" />
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
							<ListItemText primary="Communities" />
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
							<CategoryIcon className={classes.icons} />

							<ListItemText primary="Categories" />
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
							<span class="material-icons">medical_services</span>
							<ListItemText primary="Services" />
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
							<ListItemText primary="Friends" />
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
							<ListItemText primary="Help" />
						</ListItemIcon>
					</ListItem>
				</List>
			</div>
		</Grid>
	);
}

export default function SideBar() {
	return <SideBarStyled />;
}
