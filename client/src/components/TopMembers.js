import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';

import PeopleIcon from '@material-ui/icons/People';

function TopMembers() {
	return (
		<section>
			<Typography>
				<span class="material-icons">leaderboard</span> Top Members
			</Typography>

			<Card>
				<CardHeader avatar={<Avatar>M</Avatar>} title="Michaela Palmer" subheader="172 Reports   52065 Candy" />
			</Card>

			<Card>
				<CardHeader avatar={<Avatar>S</Avatar>} title="Samuel Brown" subheader="126 Reports   42656 Candy" />
			</Card>

			<Card>
				<CardHeader avatar={<Avatar>L</Avatar>} title="Leon Task" subheader="89 Reports   25672 Candy" />
			</Card>
		</section>
	);
}

export default TopMembers;
