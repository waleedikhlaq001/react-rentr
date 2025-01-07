import React, { useState } from "react";
import { Link } from "react-router-dom";

function ConfirmDetailsForm({ details: initialDetails, onSubmit, onBack }) {
	const [details, setDetails] = useState(
		initialDetails || {
			firstName: "",
			lastName: "",
			email: "",
		}
	);
	const [errors, setErrors] = useState({});

	// Handle input change
	const handleChange = (e) => {
		const { name, value } = e.target;
		setDetails({ ...details, [name]: value });
		setErrors({ ...errors, [name]: "" }); // Clear the error for this field
	};

	// Validate form fields
	const validate = () => {
		const newErrors = {};
		if (!details.firstName.trim()) {
			newErrors.firstName = "First name is required.";
		}
		if (!details.lastName.trim()) {
			newErrors.lastName = "Last name is required.";
		}
		if (!details.email.trim()) {
			newErrors.email = "Email is required.";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(details.email)
		) {
			newErrors.email = "Invalid email address.";
		}
		return newErrors;
	};

	// Check if form is valid
	const isFormValid = () => {
		const newErrors = validate();
		return Object.keys(newErrors).length === 0;
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = validate();
		if (Object.keys(newErrors).length === 0) {
			onSubmit(details); // Pass valid details to parent
		} else {
			setErrors(newErrors);
		}
	};

	return (
		<div className="flex flex-col items-center bg-[#fafafa]">
			<div className="max-w-md w-full p-6 pb-20 md:pb-8">
				<h2 className="text-xl font-semibold mb-2 text-gray-800">
					Confirm your details
				</h2>
				<p className="text-gray-500 text-sm mb-6">
					Check that your personal information is correct. This should
					match what your property has on file.
				</p>
				<form onSubmit={handleSubmit}>
					<div className="grid grid-cols-2 gap-5 mb-4">
						{/* First Name */}
						<div>
							<input
								type="text"
								id="firstName"
								name="firstName"
								placeholder="First Name"
								value={details.firstName}
								onChange={handleChange}
								className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-0 ${
									errors.firstName
										? "border-red-500 focus:ring-red-500"
										: "border-gray-300 focus:ring-primary"
								}`}
							/>
							{errors.firstName && (
								<p className="text-red-500 text-sm mt-1">
									{errors.firstName}
								</p>
							)}
						</div>

						{/* Last Name */}
						<div>
							<input
								type="text"
								id="lastName"
								name="lastName"
								placeholder="Last Name"
								value={details.lastName}
								onChange={handleChange}
								className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-0 ${
									errors.lastName
										? "border-red-500 focus:ring-red-500"
										: "border-gray-300 focus:ring-primary"
								}`}
							/>
							{errors.lastName && (
								<p className="text-red-500 text-sm mt-1">
									{errors.lastName}
								</p>
							)}
						</div>
					</div>

					{/* Email */}
					<div className="mb-4">
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Email address"
							value={details.email}
							onChange={handleChange}
							className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-0 ${
								errors.email
									? "border-red-500 focus:ring-red-500"
									: "border-gray-300 focus:ring-primary"
							}`}
						/>
						{errors.email && (
							<p className="text-red-500 text-sm mt-1">
								{errors.email}
							</p>
						)}
					</div>

					<p className="text-[#475467] text-sm mb-6">
						By creating an account, you agree to the{" "}
						<Link
							className="border-b border-b-[#475467]"
							to="/onboarding"
						>
							E-Sign Consent Agreement
						</Link>
						,{" "}
						<Link
							className="border-b border-b-[#475467]"
							to="/onboarding"
						>
							Terms & Conditions
						</Link>
						,{" "}
						<Link
							className="border-b border-b-[#475467]"
							to="/onboarding"
						>
							Privacy Notice
						</Link>
						 and 
						<Link
							className="border-b border-b-[#475467]"
							to="/onboarding"
						>
							Policy
						</Link>
						.
					</p>
				</form>
			</div>

			{/* Fixed Button at the Bottom */}
			<div className="fixed bottom-0 left-0 right-0 px-4 py-4 w-full md:max-w-md bg-white shadow-lg md:static md:px-0 md:py-0 md:shadow-none">
				<button
					type="submit"
					className={`w-full py-3 rounded-xl text-base font-medium transition ${
						isFormValid()
							? "bg-primary text-white hover:bg-primary-dark"
							: "bg-secondary text-white cursor-not-allowed"
					}`}
					disabled={!isFormValid()}
					onClick={handleSubmit}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default ConfirmDetailsForm;
