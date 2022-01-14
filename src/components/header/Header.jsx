import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../logo/Logo';
import { useDataStore } from '../context/context';
import './header.scss';

export const Header = () => {
	const { adminMode, adminAccess } = useDataStore();

	return (
		<div className="headerWrapper">
			{/* <div className="logo"></div> */}
			<div className="logo">
				<Logo />
			</div>
			<div className="navigation">
				<ul>
					<Link to="/">
						<li>Home</li>
					</Link>

					<Link to="/documentacion">
						<li>Documentacion</li>
					</Link>

					<Link to="/contact">
						<li>Contact</li>
					</Link>
				</ul>
			</div>
			<div className="loginBtn" onClick={adminAccess}>
				{!adminMode ? 'Access' : 'Log out'}
			</div>
		</div>
	);
};
