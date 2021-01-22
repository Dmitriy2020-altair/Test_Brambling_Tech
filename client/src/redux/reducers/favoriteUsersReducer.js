import { createSlice } from "@reduxjs/toolkit";

const favoriteUsersSlice = createSlice({
	name: 'favoriteUsers',
	initialState: [],
	reducers: {
		addUser(state, action) {
			const favoriteUserId = action.payload;

			const match = state.find(userId => userId === favoriteUserId);

			if (typeof match === 'number') return state;

			state.push(favoriteUserId);
		},

		removeUser(state, action) {
			const favoriteUserId = action.payload;

			return state.filter(userId => userId !== favoriteUserId);
		}
	}
});

export const { addUser, removeUser } = favoriteUsersSlice.actions;

export const isFavoriteUserSelector = (store, userId) => {
	const match = store.favoriteUsers.find(favUserId => favUserId === userId);

	return typeof match === 'number' ? true : false;
}

export default favoriteUsersSlice.reducer;