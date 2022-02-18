const feedDataReducer = (state = null, action) => {
	console.log("data State", state)
	console.log('thisIsAction',action)
	switch (action.type) {
		default:
			return action.type;
	}
};

export default feedDataReducer;
