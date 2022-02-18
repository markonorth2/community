const displayReducer = (state = null, action) => {
	console.log('hereiam', state)
	switch (action.type) {
		case 'RECENT':
			return 'RECENT';
		case 'YOUR_RECENT':
			return 'YOUR_RECENT';
		case 'POPULAR':
			return 'POPULAR';
		default:
			return action.type;
	}
};

export default displayReducer;
