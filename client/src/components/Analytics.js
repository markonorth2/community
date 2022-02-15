import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		display:"flex",
		justifyContent:"center",
		marginTop:5,
		marginBottom:5
	},
	box: {
		borderLeft:"3px solid #6EEB83",
		padding: 20,
		marginBottom: 8
	}
});

function AnalyticsStyled() {
	const classes = useStyles();

	return (
		<section>
		<Typography>
				<span class="material-icons">insights</span>Analytics
			</Typography>
		<Grid container direction="row" columns={2} spacing={1} className={classes.root}>
			<Grid item>
				<Grid>
					<Paper align="center" className={classes.box}>
						<p>Reports</p>
						<h1>247</h1>
					</Paper>
				</Grid>
				<Grid>
					<Paper align="center" className={classes.box}>
						<p>Comments</p>
						<h1>87</h1>
					</Paper>
				</Grid>
			</Grid>

			<Grid item>
				<Grid>
					<Paper align="center" className={classes.box}>
						<p>Members</p>
						<h1>3172</h1>
					</Paper>
				</Grid>
				<Grid>
					<Paper align="center" className={classes.box}>
						<p>Filler</p>
						<h1>27</h1>
					</Paper>
				</Grid>
			</Grid>
		</Grid>
		</section>
	);
}

function Analytics() {
	return <AnalyticsStyled />;
}

export default Analytics;
