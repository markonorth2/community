import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Avatar } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
	report: {
		marginRight: 100,	
	}
});

function ReportStyled() {
	const classes = useStyles();
	return (
		<Grid item md={4} className={classes.report}>
			<Card>
				<CardHeader
					avatar={<Avatar>J</Avatar>}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="X-Ray @ Jr Hospital"
					subheader="January 26, 2022"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
}

export default function Report() {
	return (
		<ReportStyled />
	);
}
