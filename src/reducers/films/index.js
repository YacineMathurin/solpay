import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: [],
};

export const filmsSlice = createSlice({
	name: "list",
	initialState,
	reducers: {
		populateFilms: (state, action) => {
			// TODO : implementer populateFilms
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
		},
	},
});

// Action creators are generated for each case reducer function

// TODO : exporter la slice :)

export default filmsSlice.reducer;
