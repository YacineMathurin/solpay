import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
	list: []
}  
const initialState: InitialState = {
	list: [],
};

export const filmsSlice = createSlice({
	name: "filmsList",
	initialState,
	reducers: {
		populateFilms: (state, action: PayloadAction<[]>) => {
			state.list = action.payload
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
export const { populateFilms } = filmsSlice.actions;

export default filmsSlice.reducer;
