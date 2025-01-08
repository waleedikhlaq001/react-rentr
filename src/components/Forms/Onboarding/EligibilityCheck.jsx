import React, { useState } from "react";
import visa from "../../../assets/images/visa.svg";
import master from "../../../assets/images/master.svg";
import plaid from "../../../assets/images/pliadLogoFooter.svg";

function EligibilityCheck({ onSubmit }) {
	const [checkTermsCondition, setCheckTermsCondition] = useState(false);

	const handleSubmitDetails = () => {
		onSubmit(checkTermsCondition);
	};

	return (
		<div className="flex flex-col items-center bg-[#fafafa]">
			<div className="max-w-lg w-full p-6 md:p-10">
				<header className="mb-6">
					<h1 className="text-2xl font-semibold text-gray-800">
						Eligibility Check
					</h1>
					<p className="text-gray-600 mt-2">
						To proceed with your application, we need to establish a
						secure connection with your bank. This allows us to
						safely verify your financial information to assess your
						application.
					</p>
				</header>

				<p className="text-sm text-gray-500 mb-4">
					We use bank-level encryption to keep your information safe,
					and this connection is regulated by the Financial Conduct
					Authority (FCA).
				</p>
				<a
					href="#"
					className="text-primary text-sm font-medium underline mb-6 block"
				>
					Learn more about our secure banking connection
				</a>

				<div className="mb-6 bg-white border rounded-xl shadow p-4">
					<h2 className="text-gray-600 text-base font-semibold mb-2">
						What we’ll access
					</h2>
					<ul className="list-disc list-inside text-black text-sm space-y-1 ps-4">
						<li>Account information</li>
						<li>Transaction history</li>
						<li>Balance details</li>
					</ul>
				</div>

				<p className="text-gray-600 text-sm mb-6">
					We will only use this information to assess your eligibility
					for Rentr’s services. Your data is protected under data
					protection laws.
				</p>

				<div className="mb-6">
					<h2 className="text-gray-800 text-base font-semibold">
						Terms and Conditions
					</h2>
					<p className="text-gray-600 text-sm mt-2">
						By consenting, you agree to our{" "}
						<a href="#" className="text-primary underline">
							Terms of Service
						</a>{" "}
						and{" "}
						<a href="#" className="text-primary underline">
							Privacy Policy
						</a>
						. You can withdraw your consent at any time by
						contacting us.
					</p>
				</div>

				<div className="flex items-center mb-6">
					<input
						type="checkbox"
						checked={checkTermsCondition}
						onChange={(e) =>
							setCheckTermsCondition(e.target.checked)
						}
						id="consent"
						className="h-5 w-5 border-gray-300 rounded accent-black focus:ring-primary focus:ring-0"
					/>
					<label
						htmlFor="consent"
						className="ml-3 text-black text-sm"
					>
						I consent to Rentr accessing my financial information
						via Open Banking for the purpose of assessing my
						eligibility.
					</label>
				</div>
			</div>

			<div className="fixed bottom-0 left-0 right-0 px-4 py-4 w-full md:max-w-md bg-white shadow-lg md:static md:px-0 md:py-0 md:shadow-none">
				<button
					type="button"
					disabled={!checkTermsCondition}
					onClick={handleSubmitDetails}
					className={`w-full py-3 rounded-lg font-medium text-base transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
						checkTermsCondition
							? "bg-primary text-white hover:bg-primary-dark"
							: "bg-secondary text-white cursor-not-allowed"
					}`}
				>
					Next
				</button>
			</div>

			<footer className="md:mt-6 mt-0 text-center max-w-lg w-full px-5 md:pb-8 pb-[8rem]">
				<hr />
				<div className="flex justify-around mt-6">
					<div className="">
						<p className="text-xs text-gray-600 mb-3">Powered by</p>
						<img src={plaid} alt="" />
					</div>
					<div className="">
						<p className="text-center text-xs text-gray-600 mb-3">
							Trusted by
						</p>
						<div className="flex justify-between gap-x-8">
							<img src={visa} alt="" />
							<img src={master} alt="" />
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default EligibilityCheck;
