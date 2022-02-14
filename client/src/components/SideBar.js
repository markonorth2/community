
import { Grid } from '@material-ui/core';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
	sideBar: {
		marginRight: 100,
	}
});

function SideBarStyled() {
	const classes = useStyles();
	return (
		<Grid item md={1} className={classes.sideBar}>
			<List>
				<ListItem button divider>
					<ListItemIcon>
						<HomeIcon />
						<ListItemText primary="Home" />
					</ListItemIcon>
				</ListItem>

				<ListItem button divider>
					<ListItemIcon>
						<PeopleIcon />
						<ListItemText primary="Communities" />
					</ListItemIcon>
				</ListItem>

				<ListItem button>
					<ListItemIcon>
						<CategoryIcon />
						<ListItemText primary="Categories" />
					</ListItemIcon>
				</ListItem>
			</List>
		</Grid>
	);
}

export default function SideBar() {
	return (
		<SideBarStyled />
	);
}
