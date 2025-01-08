import React from "react";
import cartoonError from "../../../assets/images/cartoonError.svg";

function Error() {
	return (
		<div className="flex flex-col mt-8 items-center bg-[#fafafa]">
			<div className="max-w-md w-full p-6 text-center">
				{/* Illustration */}
				<div className="mb-6">
					<img
						src={cartoonError}
						alt="House Illustration"
						className="mx-auto"
					/>
				</div>

				{/* Text Content */}
				<h1 className="text-xl font-semibold text-gray-800 mb-3">
					Something went wrong...
				</h1>
				<p className="text-gray-600 mb-4">
					Please try reloading the page, that should do the trick.
				</p>
			</div>

			<div className="fixed bottom-0 left-0 right-0 px-4 py-4 w-full md:max-w-md bg-white shadow-lg md:static md:px-0 md:py-0 md:shadow-none">
				<button
					type="button"
					className="w-full bg-primary text-white py-3 rounded-lg font-medium text-base  transition focus:outline-none focus:ring-0 "
				>
					Relaod Page
				</button>
			</div>
		</div>
	);
}

export default Error;
