import React from "react";
import cartoonReview from "../../../assets/images/reviewCartoon.svg";

function Success({ onSubmit }) {
	const handleSubmit = () => {
		onSubmit();
	};
	return (
		<div className="flex flex-col mt-8 items-center bg-[#fafafa]">
			<div className="max-w-md w-full p-6 text-center">
				{/* Illustration */}
				<div className="mb-6">
					<img
						src={cartoonReview}
						alt="House Illustration"
						className="mx-auto"
					/>
				</div>

				{/* Text Content */}
				<h1 className="text-xl font-semibold text-gray-800 mb-3">
					We’re reviewing your details...
				</h1>
				<p className="text-gray-600 mb-4">
					Our team is reviewing your details and onboarding your
					account. We’ll email you when it’s ready, which typically
					takes 1-2 business days.
				</p>
				<p className="text-gray-600 mb-6">
					Meanwhile, head to the dashboard to explore more of what
					Rentr can offer you.
				</p>

				{/* Button */}
				{/* <button
					type="button"
					className="w-full bg-primary text-white py-3 rounded-lg font-medium text-base  transition focus:outline-none focus:ring-0 "
				>
					Visit dashboard
				</button> */}
			</div>

			<div className="fixed bottom-0 left-0 right-0 px-4 py-4 w-full md:max-w-md bg-white shadow-lg md:static md:px-0 md:py-0 md:shadow-none">
				<button
					type="button"
					className="w-full bg-primary text-white py-3 rounded-lg font-medium text-base  transition focus:outline-none focus:ring-0 "
					onClick={handleSubmit}
				>
					Visit dashboard
				</button>
			</div>
		</div>
	);
}

export default Success;
