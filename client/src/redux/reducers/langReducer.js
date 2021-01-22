import { createSlice } from "@reduxjs/toolkit";

export const RU = 'ru', EN = 'en';

const langSlice = createSlice({
	name: 'lang',
	initialState: EN,
	reducers: {
		switchLang(state, action) {
			const newLang = action.payload;

			return newLang; 
		}
	}
});

export const { switchLang } = langSlice.actions;

export default langSlice.reducer;