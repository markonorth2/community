import { Grid } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';

import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#736372'
		},
		secondary: {
			main: '#DCEED1'
		}
	}
});

const useStyles = makeStyles({
	sideBar: {
		marginRight: 100,
	},
  sideBarItem: { 
  }
});

function SideBarStyled() {
	const classes = useStyles();
	return (
		<Grid item md={1} className={classes.sideBar}>
			<List>
				<ListItem button divider className={classes.sideBarItem} >
					<ListItemIcon>
						<HomeIcon color={'#736372'} />
						<ListItemText primary="Home" />
					</ListItemIcon>
				</ListItem>

				<ListItem button divider className={classes.sideBarItem} >
					<ListItemIcon >
						<PeopleIcon />
						<ListItemText primary="Communities" />
					</ListItemIcon>
				</ListItem>

				<ListItem button divider className={classes.sideBarItem}>
					<ListItemIcon>
						<CategoryIcon />

						<ListItemText primary="Categories" />
					</ListItemIcon>
				</ListItem>

        <ListItem button divider className={classes.sideBarItem}>
					<ListItemIcon>
						

						<ListItemText primary="Services" />
					</ListItemIcon>
				</ListItem>

        <ListItem button divider className={classes.sideBarItem}>
					<ListItemIcon>
				

						<ListItemText primary="Friends" />
					</ListItemIcon>
				</ListItem>
			</List>

      
		</Grid>
	);
}

export default function SideBar() {
	return <SideBarStyled />;
}
