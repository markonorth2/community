import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';

import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

import TopMembers from './TopMembers';
import Analytics from './Analytics';

function CommunityToday() {
	return (
		<Grid item md={2}>
			<Typography>Community Today</Typography>
			<QuestionAnswerIcon />
			<Button size="small">Popular</Button>
			<Button size="small">Your Recent</Button>

			<Card>
				<CardHeader avatar={<Avatar>J</Avatar>} title="X-Ray @ Jr Hospital Was OVERPRICED!!!" />
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit...
					</Typography>
				</CardContent>
			</Card>

			
			<Analytics />
			<TopMembers />
		</Grid>
	);
}

export default CommunityToday;
