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
			main: '#6096BA'
		},
		secondary: {
			main: '#6EEB83'
		}
	}
});

const useStyles = makeStyles({
	sideBar: {
		marginRight: 100
	}
});

function SideBarStyled() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Grid item md={1} className={classes.sideBar}>
				<List>
					<ListItem button divider className={classes.sideBarItem}>
						<ListItemIcon>
							<HomeIcon color="primary" />
							<ListItemText primary="Home" />
						</ListItemIcon>
					</ListItem>

					<ListItem button divider className={classes.sideBarItem}>
						<ListItemIcon>
							<span class="material-icons">public</span>
							<ListItemText primary="Communities" />
						</ListItemIcon>
					</ListItem>

					<ListItem button divider className={classes.sideBarItem}>
						<ListItemIcon>
							<CategoryIcon color="primary" />

							<ListItemText primary="Categories" />
						</ListItemIcon>
					</ListItem>

					<ListItem button divider className={classes.sideBarItem}>
						<ListItemIcon>
							<span class="material-icons">medical_services</span>
							<ListItemText primary="Services" />
						</ListItemIcon>
					</ListItem>

					<ListItem button divider className={classes.sideBarItem}>
						<ListItemIcon>
							<PeopleIcon color="primary" />
							<ListItemText primary="Friends" />
						</ListItemIcon>
					</ListItem>
				</List>
			</Grid>
		</ThemeProvider>
	);
}

export default function SideBar() {
	return <SideBarStyled />;
}
