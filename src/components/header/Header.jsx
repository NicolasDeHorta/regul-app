import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../logo/Logo';
import './header.scss';

export const Header = () => {
	return (
		<div className="headerWrapper">
			{/* <div className="logo"></div> */}
			<div className="logo">
				<Logo />
			</div>
			<div className="navigation">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/documentacion">Documentacion</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
