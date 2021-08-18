import classes from './Header.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Header = (props) => {
	const dispatch = useDispatch();

	const logout = () => {
		dispatch(authActions.logout());
	};

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			<nav>
				<ul>
					{props.isLoggedIn && (
						<li>
							<a href='/'>My Products</a>
						</li>
					)}
					{props.isLoggedIn && (
						<li>
							<a href='/'>My Sales</a>
						</li>
					)}
					<li>
						<button onClick={logout}>Logout</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
