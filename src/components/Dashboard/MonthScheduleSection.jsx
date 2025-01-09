import React from "react";

function MonthlySchedule() {
	return (
		<div className="p-6 bg-white border rounded-xl shadow-md mx-auto mx-2 mt-8">
			{/* Header */}
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-lg font-semibold text-gray-800">
					This month’s schedule
				</h2>
				<span className="text-gray-500 text-sm">January 2025</span>
			</div>

			{/* Schedule Items */}
			<div className="relative mt-5">
				{/* Vertical Line */}
				<div className="absolute left-3 top-[2.3rem] bottom-0 w-0.5 h-[3.2rem] bg-secondary"></div>
				<div className="absolute left-3 top-[7.6rem]  bottom-0 w-0.5 h-[3.2rem] bg-secondary"></div>

				{/* First Item */}
				<div className="flex mb-6">
					{/* Icon */}
					<div className="relative z-10 mt-2">
						<svg
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M16.7502 4.06V2.5C16.7502 2.09 16.4102 1.75 16.0002 1.75C15.5902 1.75 15.2502 2.09 15.2502 2.5V4H8.75023V2.5C8.75023 2.09 8.41023 1.75 8.00023 1.75C7.59023 1.75 7.25023 2.09 7.25023 2.5V4.06C4.55023 4.31 3.24023 5.92 3.04023 8.31C3.02023 8.6 3.26023 8.84 3.54023 8.84H20.4602C20.7502 8.84 20.9902 8.59 20.9602 8.31C20.7602 5.92 19.4502 4.31 16.7502 4.06Z"
								fill="#F478BA"
							/>
							<path
								d="M20 10.34H4C3.45 10.34 3 10.79 3 11.34V17.5C3 20.5 4.5 22.5 8 22.5H16C19.5 22.5 21 20.5 21 17.5V11.34C21 10.79 20.55 10.34 20 10.34ZM9.21 18.71C9.11 18.8 9 18.87 8.88 18.92C8.76 18.97 8.63 19 8.5 19C8.37 19 8.24 18.97 8.12 18.92C8 18.87 7.89 18.8 7.79 18.71C7.61 18.52 7.5 18.26 7.5 18C7.5 17.74 7.61 17.48 7.79 17.29C7.89 17.2 8 17.13 8.12 17.08C8.36 16.98 8.64 16.98 8.88 17.08C9 17.13 9.11 17.2 9.21 17.29C9.39 17.48 9.5 17.74 9.5 18C9.5 18.26 9.39 18.52 9.21 18.71ZM9.42 14.88C9.37 15 9.3 15.11 9.21 15.21C9.11 15.3 9 15.37 8.88 15.42C8.76 15.47 8.63 15.5 8.5 15.5C8.37 15.5 8.24 15.47 8.12 15.42C8 15.37 7.89 15.3 7.79 15.21C7.7 15.11 7.63 15 7.58 14.88C7.53 14.76 7.5 14.63 7.5 14.5C7.5 14.37 7.53 14.24 7.58 14.12C7.63 14 7.7 13.89 7.79 13.79C7.89 13.7 8 13.63 8.12 13.58C8.36 13.48 8.64 13.48 8.88 13.58C9 13.63 9.11 13.7 9.21 13.79C9.3 13.89 9.37 14 9.42 14.12C9.47 14.24 9.5 14.37 9.5 14.5C9.5 14.63 9.47 14.76 9.42 14.88ZM12.71 15.21C12.61 15.3 12.5 15.37 12.38 15.42C12.26 15.47 12.13 15.5 12 15.5C11.87 15.5 11.74 15.47 11.62 15.42C11.5 15.37 11.39 15.3 11.29 15.21C11.11 15.02 11 14.76 11 14.5C11 14.24 11.11 13.98 11.29 13.79C11.39 13.7 11.5 13.63 11.62 13.58C11.86 13.47 12.14 13.47 12.38 13.58C12.5 13.63 12.61 13.7 12.71 13.79C12.89 13.98 13 14.24 13 14.5C13 14.76 12.89 15.02 12.71 15.21Z"
								fill="#F478BA"
							/>
						</svg>
					</div>

					{/* Details */}
					<div className="md:ml-6 ml-2 w-full">
						<div className="flex justify-between">
							<div>
								<p className="text-sm font-bold text-gray-800">
									1st January 2025
								</p>
								<p className="text-sm text-gray-500">
									Your payment to landlord
								</p>
							</div>
							<div>
								<p className="text-gray-800 text-end font-semibold">
									£1,000
								</p>
								<span className="text-end gap-2 text-xs text-[#0A9467] flex items-center">
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
									<span>Payment made</span>
								</span>
							</div>
						</div>
						<hr className="mt-4" />
					</div>
				</div>

				{/* Second Item */}
				<div className="flex mb-6">
					{/* Icon */}
					<div className="relative mt-2 z-10">
						<div className="bg-pink-100 p-2 rounded-full">
							<div className="w-3 h-3 bg-primary rounded-full"></div>
						</div>
					</div>

					{/* Details */}
					<div className="md:ml-6 ml-2 w-full">
						<p className="text-sm font-semibold text-gray-800">
							Today
						</p>
						<p className="text-sm text-gray-500">
							10th January 2025
						</p>
						<hr className="mt-4" />
					</div>
				</div>

				{/* Third Item */}
				<div className="flex">
					{/* Icon */}
					<div className="relative z-10">
						<div className="mt-2 rounded-full">
							<svg
								width="24"
								height="25"
								viewBox="0 0 24 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.7502 4.06V2.5C16.7502 2.09 16.4102 1.75 16.0002 1.75C15.5902 1.75 15.2502 2.09 15.2502 2.5V4H8.75023V2.5C8.75023 2.09 8.41023 1.75 8.00023 1.75C7.59023 1.75 7.25023 2.09 7.25023 2.5V4.06C4.55023 4.31 3.24023 5.92 3.04023 8.31C3.02023 8.6 3.26023 8.84 3.54023 8.84H20.4602C20.7502 8.84 20.9902 8.59 20.9602 8.31C20.7602 5.92 19.4502 4.31 16.7502 4.06Z"
									fill="#F478BA"
								/>
								<path
									d="M20 10.34H4C3.45 10.34 3 10.79 3 11.34V17.5C3 20.5 4.5 22.5 8 22.5H16C19.5 22.5 21 20.5 21 17.5V11.34C21 10.79 20.55 10.34 20 10.34ZM9.21 18.71C9.11 18.8 9 18.87 8.88 18.92C8.76 18.97 8.63 19 8.5 19C8.37 19 8.24 18.97 8.12 18.92C8 18.87 7.89 18.8 7.79 18.71C7.61 18.52 7.5 18.26 7.5 18C7.5 17.74 7.61 17.48 7.79 17.29C7.89 17.2 8 17.13 8.12 17.08C8.36 16.98 8.64 16.98 8.88 17.08C9 17.13 9.11 17.2 9.21 17.29C9.39 17.48 9.5 17.74 9.5 18C9.5 18.26 9.39 18.52 9.21 18.71ZM9.42 14.88C9.37 15 9.3 15.11 9.21 15.21C9.11 15.3 9 15.37 8.88 15.42C8.76 15.47 8.63 15.5 8.5 15.5C8.37 15.5 8.24 15.47 8.12 15.42C8 15.37 7.89 15.3 7.79 15.21C7.7 15.11 7.63 15 7.58 14.88C7.53 14.76 7.5 14.63 7.5 14.5C7.5 14.37 7.53 14.24 7.58 14.12C7.63 14 7.7 13.89 7.79 13.79C7.89 13.7 8 13.63 8.12 13.58C8.36 13.48 8.64 13.48 8.88 13.58C9 13.63 9.11 13.7 9.21 13.79C9.3 13.89 9.37 14 9.42 14.12C9.47 14.24 9.5 14.37 9.5 14.5C9.5 14.63 9.47 14.76 9.42 14.88ZM12.71 15.21C12.61 15.3 12.5 15.37 12.38 15.42C12.26 15.47 12.13 15.5 12 15.5C11.87 15.5 11.74 15.47 11.62 15.42C11.5 15.37 11.39 15.3 11.29 15.21C11.11 15.02 11 14.76 11 14.5C11 14.24 11.11 13.98 11.29 13.79C11.39 13.7 11.5 13.63 11.62 13.58C11.86 13.47 12.14 13.47 12.38 13.58C12.5 13.63 12.61 13.7 12.71 13.79C12.89 13.98 13 14.24 13 14.5C13 14.76 12.89 15.02 12.71 15.21Z"
									fill="#F478BA"
								/>
							</svg>
						</div>
					</div>

					{/* Details */}
					<div className="md:ml-4 ml-2 w-full">
						<div className="flex justify-between">
							<div>
								<p className="text-sm font-semibold text-gray-800">
									14th January 2025
								</p>
								<p className="text-sm text-gray-500">
									Your payment to Rentr
								</p>
							</div>
							<div>
								<div>
									<p className="text-gray-800 text-end font-semibold">
										£1,010
									</p>
									<span className="text-end text-sm text-gray-500">
										Includes 1% admin fee
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MonthlySchedule;
