import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: 'authentification',
	initialState: initialAuthState,
	reducers: {
		login(state) {
			state.isLoggedIn = true;
		},
		logout(state) {
			state.isLoggedIn = false;
		},
	},
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
