import { Avatar, Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';

import '../styles/TopMembers.css';



function TopMembers() {
	return (
		<Grid className='topMembers'>
			<Typography>
				<span class="material-icons">leaderboard</span> Top Members
			</Typography>


				<CardHeader avatar={<Avatar>M</Avatar>} title="Michaela Palmer" subheader="172 Reports   52065 Candy" />
			

			
				<CardHeader avatar={<Avatar>S</Avatar>} title="Samuel Brown" subheader="126 Reports   42656 Candy" />
			

			
				<CardHeader avatar={<Avatar>L</Avatar>} title="Leon Task" subheader="89 Reports   25672 Candy" />
			
		</Grid>
	);
}

export default TopMembers;
