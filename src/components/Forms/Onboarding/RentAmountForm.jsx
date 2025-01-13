import React, { useState } from "react";

function RentAmount({ initialAmount = "", onSubmit, onBack }) {
	const [amount, setAmount] = useState(initialAmount);
	const [errors, setErrors] = useState({});

	// Handle input change
	const handleChange = (e) => {
		const value = e.target.value;
		if (!isNaN(value) || value === "") {
			setAmount(value);
			setErrors({}); // Clear errors if valid input
		} else {
			setErrors({ amount: "Please enter a valid number." });
		}
	};

	// Validate and submit
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!amount || isNaN(amount) || Number(amount) <= 0) {
			setErrors({ amount: "Please enter a valid rent amount." });
		} else {
			onSubmit(amount); // Pass the valid amount to the parent
		}
	};

	return (
		<div className="flex flex-col items-center mt-4 bg-[#fafafa]">
			<div className="max-w-md w-full p-6 pb-20 md:pb-8">
				<h2 className="text-xl font-semibold mb-2 text-gray-800">
					How much rent do you currently pay?
				</h2>
				<p className="text-gray-500 text-sm mb-6">
					Enter the monthly rent amount in Euros (€). Ensure this
					amount is accurate to avoid discrepancies.
				</p>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<div className="relative border rounded-xl px-3 py-2 focus-within:ring-1 focus-within:ring-black">
							<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
								€
							</span>
							<input
								type="text"
								id="amount"
								name="amount"
								placeholder="1600"
								value={amount}
								onChange={handleChange}
								className={`w-full pl-8 bg-[#fafafa] outline-none text-gray-800 ${
									errors.amount
										? "border-red-500"
										: "border-gray-300"
								}`}
							/>
						</div>
						{errors.amount && (
							<p className="text-red-500 text-sm mt-2">
								{errors.amount}
							</p>
						)}
					</div>
				</form>
			</div>

			{/* Fixed Button at the Bottom */}
			<div className="fixed bottom-0 border-t md:border-t-0 left-0 right-0 px-4 py-4 w-full md:max-w-md md:bg-transparent bg-white shadow-lg md:static md:px-4 md:py-0 md:shadow-none">
				<button
					type="submit"
					disabled={!amount || errors.amount}
					className={`w-full py-3 rounded-xl text-base font-medium transition ${
						!amount || errors.amount
							? "bg-secondary text-white cursor-not-allowed"
							: "bg-primary text-white hover:bg-primary"
					}`}
					onClick={handleSubmit}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default RentAmount;
