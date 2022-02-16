import '../styles/Analytics.css';

import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';

import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',

		marginBottom: 5
	},
	statSection: {
		borderLeft: 'solid 3px #6096BA',
		paddingLeft: 15,
		borderRadius: 5
	},
	analyticsContainer: {
		backgroundColor: 'white',
		border: '1px solid lightgrey',
		paddingTop: 10,
		marginBottom: 19
	}
});

function AnalyticsStyled() {
	const classes = useStyles();

	return (
		<Box className={classes.analyticsContainer}>
			<Typography>
				<span class="material-icons">insights</span>Analytics
			</Typography>
			<Grid container direction="row" columns={2} spacing={2} className={classes.root}>
				<Grid item>
					<Grid className={classes.statSection}>
						<p>Reports</p>
						<h2>247</h2>
					</Grid>
					<Grid className={classes.statSection}>
						<p>Comments</p>
						<h2>87</h2>
					</Grid>
				</Grid>

				<Grid item>
					<Grid className={classes.statSection}>
						<p>Members</p>
						<h2>3172</h2>
					</Grid>
					<Grid className={classes.statSection}>
						<p>Filler</p>
						<h2>27</h2>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}

function Analytics() {
	return <AnalyticsStyled />;
}

export default Analytics;
