import React from 'react';

import './logo.scss';
export const Logo = () => {
	return (
		<div className="logoWrapper">
			<div className="scene">
				<div className="light">
					<div className="clip">
						<div className="container">
							{/* <!-- X Axis --> */}
							<div className="circle border"></div>
							<div className="circle border"></div>
							<div className="circle border"></div>
							<div className="circle border"></div>
							<div className="circle border"></div>
							{/* <!-- Y Axis --> */}
							<div className="circle border"></div>
							<div className="circle border"></div>
							<div className="circle border"></div>
							<div className="circle border"></div>
							<div className="circle border"></div>
							{/* <!-- Z Axis --> */}
							<div className="circle"></div>
							<div className="circle"></div>
							<div className="circle"></div>
							<div className="circle"></div>
							<div className="circle"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="logoText">
				<h2>CAMBIO</h2> REGUL S.A. <br /> <span>Casa de cambio</span>{' '}
			</div>
		</div>
	);
};
