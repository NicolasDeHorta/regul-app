import React from 'react';

import './logo.scss';
export const Logo = () => {
	return (
		<div className="logoWrapper">
			<div class="scene">
				<div class="light">
					<div class="clip">
						<div class="container">
							{/* <!-- X Axis --> */}
							<div class="circle border"></div>
							<div class="circle border"></div>
							<div class="circle border"></div>
							<div class="circle border"></div>
							<div class="circle border"></div>
							{/* <!-- Y Axis --> */}
							<div class="circle border"></div>
							<div class="circle border"></div>
							<div class="circle border"></div>
							<div class="circle border"></div>
							<div class="circle border"></div>
							{/* <!-- Z Axis --> */}
							<div class="circle"></div>
							<div class="circle"></div>
							<div class="circle"></div>
							<div class="circle"></div>
							<div class="circle"></div>
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
