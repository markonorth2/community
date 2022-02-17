const displayReducer = (state = 'POPULAR', action) => {
	switch (action.type) {
		case 'RECENT':
			return 'RECENT';
		case 'YOUR_RECENT':
			return 'YOUR_RECENT';
		case 'POPULAR':
			return 'POPULAR';
		default:
			return 'POPULAR';
	}
};

export default displayReducer;
