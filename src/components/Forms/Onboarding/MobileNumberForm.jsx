import React, { useState } from "react";

function MobileNumberForm({ mobileNumber: initialNumber, onSubmit }) {
	const [mobileNumber, setMobileNumber] = useState(initialNumber || "");
	const [showError, setShowError] = useState(false);
	const countryCode = "+44";

	// Handle mobile number change
	const handleChange = (e) => {
		const input = e.target.value;
		if (/^[0-9]*$/.test(input)) {
			setMobileNumber(input);

			// Show error only if input exceeds 15 characters
			if (input.length > 15) {
				setShowError(true);
			} else {
				setShowError(false);
			}
		}
	};

	// Check validity for button enabling (valid length between 10-15)
	const isValid = mobileNumber.length >= 10 && mobileNumber.length <= 15;

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (isValid) {
			onSubmit(mobileNumber); // Pass the mobile number to the parent
		}
	};

	return (
		<div className="flex flex-col mt-[5rem] items-center bg-[#fafafa]">
			<div className="max-w-md w-full p-6 pb-20 md:pb-8">
				<h2 className="text-xl font-semibold mb-2 text-gray-800">
					What’s your mobile number?
				</h2>
				<p className="text-gray-500 text-sm mb-6">
					We use this number for important updates and security.
				</p>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-1 focus-within:ring-black">
							<span className="text-gray-500 mr-2">
								{countryCode}
							</span>
							<input
								type="text"
								id="mobile"
								placeholder="Type your mobile number"
								value={mobileNumber}
								onChange={handleChange}
								className="w-full outline-none bg-[#fafafa] text-gray-800"
							/>
						</div>
						{showError && (
							<p className="text-red-500 text-sm mt-2">
								Please enter a valid phone number.
							</p>
						)}
					</div>
				</form>
			</div>

			{/* Fixed Button at the Bottom */}
			<div className="fixed bottom-0 left-0 border-t md:border-t-0 right-0 px-4 py-4 w-full md:max-w-md md:bg-transparent bg-white shadow-lg md:static md:px-4 md:py-0 md:shadow-none">
				<button
					type="submit"
					disabled={!isValid}
					className={`w-full py-3 rounded-xl text-base font-medium transition ${
						isValid
							? "bg-primary text-white"
							: "bg-secondary text-white cursor-not-allowed"
					}`}
					onClick={handleSubmit}
				>
					Send verification code
				</button>
			</div>
		</div>
	);
}

export default MobileNumberForm;
