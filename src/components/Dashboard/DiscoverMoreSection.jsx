import React from "react";
import discoverBack from "../../assets/images/discoverBack.svg"; // Import the background image

function DiscoverMoreSection() {
	return (
		<div className="px-2 pb-5">
			<div>
				<h1 className="text-2xl font-semibold mt-2">
					Discover more with Rentr
				</h1>
				<p className="mt-3">
					We’re working hard to add the following features to the
					platform
				</p>

				<div className="grid grid-cols-3 gap-4 mt-4">
					<div>
						<div
							className="border rounded-xl p-4 flex gap-4 shadow-lg items-center bg-gradient-to-r from-[#F478BA33] to-[#F478BA00]"
							style={{
								backgroundImage: `url(${discoverBack})`,
							}}
						>
							<div>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M17.9105 10.72H14.8205V3.52002C14.8205 1.84002 13.9105 1.50002 12.8005 2.76002L12.0005 3.67002L5.2305 11.37C4.3005 12.42 4.6905 13.28 6.0905 13.28H9.1805V20.48C9.1805 22.16 10.0905 22.5 11.2005 21.24L12.0005 20.33L18.7705 12.63C19.7005 11.58 19.3105 10.72 17.9105 10.72Z"
										fill="#F478BA"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-base font-bold">
									Credit boost
								</h3>
								<p>
									Build your credit history with every rent
									payment you make. Launching early 2025.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DiscoverMoreSection;
