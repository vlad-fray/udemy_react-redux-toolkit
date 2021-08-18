import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './counter-slice';
import authSliceReducer from './auth-slice';

const store = configureStore({
	reducer: {
		counter: counterSliceReducer,
		auth: authSliceReducer,
	},
});

export default store;

// import { createStore } from 'redux';
// const counterReducer = (state = initialState, action) => {
// 	if (action.type === 'increment')
// 		return { ...state, counter: state.counter + 1 };

// 	if (action.type === 'decrement')
// 		return { ...state, counter: state.counter - 1 };

// 	if (action.type === 'increase')
// 		return { ...state, counter: state.counter + action.value };

// 	if (action.type === 'toggle-visible')
// 		return { ...state, showCounter: !state.showCounter };

// 	return state;
// };
