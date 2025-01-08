import React, { useState } from "react";

function ReviewDetails({ address, amount, onSubmit }) {
	const [checkPrivacy, setCheckPrivacy] = useState(false);
	const [checkPaymentFacilitation, setCheckPaymentFacilitation] =
		useState(false);

	const handleSubmitDetails = () => {
		onSubmit(checkPrivacy, checkPaymentFacilitation);
	};

	return (
		<div className="flex flex-col items-center bg-[#fafafa]">
			<div className="max-w-lg w-full p-6 md:p-10">
				<header className="mb-6">
					<h1 className="text-xl md:text-2xl font-semibold text-gray-800">
						Review all the details
					</h1>
				</header>

				<div className="mb-6 bg-white border rounded-xl shadow p-4">
					<div className="flex justify-between mb-2">
						<h2 className="text-gray-600 font-[500] mb-4">
							Your address
						</h2>
						<p className="text-black text-sm text-end">
							<span>{address.name}</span>,{" "}
							<span>{address.street}</span> <br />
							<span>{address.city}</span>,{" "}
							<span>{address.postalCode}</span>
						</p>
					</div>
					<hr />
					<div className="flex justify-between my-2">
						<h2 className="text-gray-600 font-[500] ">
							Rent amount
						</h2>
						<ul className="list-none space-y-2">
							<li className="text-sm text-black">
								£{amount} every month
							</li>
						</ul>
					</div>
					<hr />
					<div className="flex justify-between my-2">
						<h2 className="text-gray-600 font-[500]">
							Rent due date
						</h2>
						<ul className="list-none space-y-2">
							<li className="text-sm text-black">
								1st of every month
							</li>
						</ul>
					</div>
				</div>

				<div className="mb-6 bg-white border rounded-xl shadow p-4">
					<h2 className="text-black text-base font-semibold mb-4">
						Your repayments
					</h2>
					<div className="flex items-center justify-between my-2">
						<h2 className="text-gray-600 font-[500] ">
							Rent will cover
						</h2>
						<ul className="list-none space-y-2">
							<li className="text-sm text-black">
								£1000 every month
							</li>
						</ul>
					</div>
					<hr />

					<div className="flex items-center justify-between my-2">
						<h2 className="text-gray-600 font-[500] ">
							You repay us
						</h2>
						<ul className="list-none space-y-2">
							<li className="text-sm text-black">
								<span>£1010 every month</span>
								<br />
								<span className="text-xs text-gray-500">
									includes facilitation fee of 1%
								</span>
							</li>
						</ul>
					</div>
					<hr />

					<div className="flex items-center justify-between my-2">
						<h2 className="text-gray-600 font-[500] ">
							You repay us on
						</h2>
						<ul className="list-none space-y-2">
							<li className="text-sm text-black">
								14th of every month
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col space-y-4 md:mb-0 mb-[5rem]">
					<div className="flex items-center">
						<input
							type="checkbox"
							id="terms"
							value={checkPrivacy}
							onChange={(e) => setCheckPrivacy(e.target.checked)}
							className="h-5 w-5 border-gray-300 rounded accent-black focus:ring-primary focus:ring-0"
						/>
						<label
							htmlFor="terms"
							className="ml-3 text-black text-sm"
						>
							I agree to the{" "}
							<a href="#" className="text-primary underline">
								Terms of Service
							</a>{" "}
							and{" "}
							<a href="#" className="text-primary underline">
								Privacy Policy
							</a>
							.
						</label>
					</div>
					<div className="flex items-center">
						<input
							type="checkbox"
							id="consent"
							value={checkPaymentFacilitation}
							onChange={(e) =>
								setCheckPaymentFacilitation(e.target.checked)
							}
							className="h-5 w-5 border-gray-300 rounded accent-black focus:ring-primary focus:ring-0"
						/>
						<label
							htmlFor="consent"
							className="ml-3 text-black text-sm"
						>
							I consent to payment facilitation by Rentr.
						</label>
					</div>
				</div>
			</div>

			<div className="fixed bottom-0 left-0 right-0 px-4 py-4 w-full md:max-w-md bg-white shadow-lg md:static md:px-0 md:py-0 md:shadow-none">
				<button
					type="button"
					disabled={!checkPrivacy && !checkPaymentFacilitation}
					className={`w-full py-3 rounded-lg font-medium text-base transition focus:outline-none focus:ring-0 ${
						checkPrivacy && checkPaymentFacilitation
							? "bg-primary text-white hover:bg-primary-dark"
							: "bg-secondary text-white cursor-not-allowed"
					}`}
					onClick={handleSubmitDetails}
				>
					Submit
				</button>
			</div>
		</div>
	);
}

export default ReviewDetails;
