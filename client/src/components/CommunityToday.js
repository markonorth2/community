import { Grid } from '@material-ui/core';

import TopMembers from './TopMembers';
import Analytics from './Analytics';

function CommunityToday() {
	return (
		<Grid item md={2} sm={3}>
			<Analytics />
			<TopMembers />
		</Grid>
	);
}

export default CommunityToday;
