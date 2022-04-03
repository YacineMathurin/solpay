import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
	list: [],
	active: number
}  
const initialState: InitialState = {
	list: [],
	active: 1
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
		setActivePage: (state, action: PayloadAction<number>) => {
			state.active = action.payload
		}
	},
});

// Action creators are generated for each case reducer function

// TODO : exporter la slice :)
export const { populateFilms, setActivePage } = filmsSlice.actions;

export default filmsSlice.reducer;
