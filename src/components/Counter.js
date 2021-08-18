import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';
import { counterActions } from '../store/counter-slice';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.counter);
	const isVisible = useSelector((state) => state.counter.showCounter);

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const increaseHandler = (e) => {
		dispatch(counterActions.increase(5));
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{isVisible && (
				<div className={classes.value}>-- {counter} --</div>
			)}
			<div>
				<button onClick={incrementHandler}>increment</button>
				<button onClick={increaseHandler}>increase by 5</button>
				<button onClick={decrementHandler}>decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
