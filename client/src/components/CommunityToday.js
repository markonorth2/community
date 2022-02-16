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
			<Analytics />
			<TopMembers />
		</Grid>
	);
}

export default CommunityToday;
