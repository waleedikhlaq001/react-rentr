import React from "react";

function WelcomeSecton() {
	return (
		<div>
			<div className="flex justify-between flex-wrap px-3 mt-8">
				<div>
					<h1 className="text-2xl font-semibold">
						Welcom back, Elaine
					</h1>
					<div className="flex items-center gap-2">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="2"
								y="2"
								width="12"
								height="12"
								rx="6"
								fill="#0A9467"
							/>
							<path
								d="M5.34375 8.46875L6.75 10.0312L10.6562 5.96875"
								stroke="white"
								strokeWidth="0.9375"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>

						<span className="text-xs text-[#0A9467]">
							You’re all set up to pay this months rent with Rentr
						</span>
					</div>
				</div>

				<div className="mt-5">
					<p className="md:text-end text-start text-xs text-[#475467]">
						Your address
					</p>
					<p className="md:text-end text-start">
						55 North Street, London, E14 0TH
					</p>
				</div>
			</div>
		</div>
	);
}

export default WelcomeSecton;
