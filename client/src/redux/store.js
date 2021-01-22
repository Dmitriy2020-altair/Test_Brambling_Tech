import { configureStore } from '@reduxjs/toolkit';
import langReducer from './reducers/langReducer';
import favoriteUsersReducer from './reducers/favoriteUsersReducer';
import { enableMapSet } from 'immer';

enableMapSet();

export const store = configureStore({
	reducer: {
		lang: langReducer,
		favoriteUsers: favoriteUsersReducer
	}
})