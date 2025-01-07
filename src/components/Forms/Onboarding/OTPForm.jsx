import React, { useState, useRef } from "react";

function OTPForm({ otp: initialOtp, onSubmit, onBack, mobileNumber }) {
	const [otp, setOtp] = useState(initialOtp || new Array(6).fill(""));
	const [showError, setShowError] = useState(false);
	const inputRefs = useRef([]);

	// Handle input change
	const handleChange = (element, index) => {
		if (/^[0-9]$/.test(element.value) || element.value === "") {
			const newOtp = [...otp];
			newOtp[index] = element.value;
			setOtp(newOtp);
			setShowError(false);

			if (element.value !== "" && index < otp.length - 1) {
				inputRefs.current[index + 1].focus();
			}
		}
	};

	// Handle backspace
	const handleKeyDown = (event, index) => {
		if (event.key === "Backspace" && otp[index] === "" && index > 0) {
			inputRefs.current[index - 1].focus();
		}
	};

	// Check if OTP is valid
	const isValid = otp.every((digit) => digit !== "");

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (isValid) {
			onSubmit(otp);
		} else {
			setShowError(true);
		}
	};

	return (
		<div className="flex flex-col items-center bg-[#fafafa]">
			<div className="max-w-md w-full p-6 pb-20 md:pb-8">
				<h2 className="text-xl font-semibold mb-2 text-gray-800">
					Confirm your number
				</h2>
				<p className="text-gray-500 text-sm mb-6">
					We texted a code to {mobileNumber}. The code will expire
					after 10 minutes.
				</p>
				<form onSubmit={handleSubmit}>
					<div className="flex justify-between mb-4">
						{otp.map((digit, index) => (
							<input
								key={index}
								type="text"
								maxLength={1}
								value={digit}
								onChange={(e) => handleChange(e.target, index)}
								onKeyDown={(e) => handleKeyDown(e, index)}
								ref={(el) => (inputRefs.current[index] = el)}
								className={`w-12 h-12 text-center border rounded-md text-lg focus:outline-none focus:ring-2 ${
									digit !== ""
										? "text-[#2A9365] border-[#2A9365]"
										: "text-black border-gray-300"
								}`}
							/>
						))}
					</div>
					{showError && (
						<p className="text-red-500 text-sm mb-4">
							Please enter a valid 6-digit OTP.
						</p>
					)}
				</form>
			</div>

			{/* Fixed Button at the Bottom */}
			<div className="fixed bottom-0 left-0 right-0 px-4 py-4 w-full md:max-w-md bg-white shadow-lg md:static md:px-4 md:py-0 md:shadow-none">
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
					Verify Code
				</button>
			</div>
		</div>
	);
}

export default OTPForm;
