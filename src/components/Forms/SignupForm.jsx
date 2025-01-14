import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

function SignUpForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rePassword, setRePassword] = useState("");
	const [termsAccepted, setTermsAccepted] = useState(false);

	const [errors, setErrors] = useState({
		email: "",
		password: "",
		rePassword: "",
	});

	// Email validation regex
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Password validation regex
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

	// Validation on input change
	const validateInputs = () => {
		const newErrors = {};

		// Email validation
		if (!email) {
			newErrors.email = "Email is required.";
		} else if (!emailRegex.test(email)) {
			newErrors.email = "Please enter a valid email address.";
		}

		// Password validation
		if (!password) {
			// newErrors.password = "Password is required.";
		} else if (!passwordRegex.test(password)) {
			newErrors.password =
				"Password must be at least 8 characters long and include at least one letter and one number.";
		}

		// Repeat Password validation
		if (!rePassword) {
			// newErrors.rePassword = "Please repeat your password.";
		} else if (password !== rePassword) {
			newErrors.rePassword = "Passwords do not match.";
		}

		setErrors(newErrors);

		// Return true if there are no errors
		return Object.keys(newErrors).length === 0;
	};

	// Check if form is valid
	const isFormValid =
		email &&
		password &&
		rePassword &&
		termsAccepted &&
		Object.keys(errors).length === 0;

	// Submit Handler
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateInputs()) {
			// Proceed to the next step
			alert("Form submitted successfully!");
		}
	};

	return (
		<div className="min-h-screen flex font-bagoss flex-col items-center pt-[3rem] px-3 bg-[#fafafa]">
			<Link to="/">
				<img src={Logo} className="mb-6" alt="" />
			</Link>
			<div className="max-w-md w-full bg-white p-8 border rounded-xl shadow-md">
				{/* Title */}
				<h2 className=" text-2xl font-semibold mb-2">
					Create your free account
				</h2>
				<p className=" text-gray-500 text-sm mb-6">
					Signing up takes just 2 minutes.
				</p>

				{/* Email Input */}
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<input
							type="email"
							id="email"
							placeholder="Email address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							onBlur={validateInputs}
							className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-0 ${
								errors.email
									? "border-red-500"
									: "focus:border-primary"
							}`}
						/>
						{errors.email && (
							<p className="text-red-500 text-sm mt-1">
								{errors.email}
							</p>
						)}
					</div>

					<div className="mb-4">
						<input
							type="password"
							id="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							onBlur={validateInputs}
							className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-0 ${
								errors.password
									? "border-red-500"
									: "focus:border-primary"
							}`}
						/>
						<p
							className={`text-[#475467] text-xs mt-21 ${
								errors.password ? "text-red-500" : ""
							}`}
						>
							Your password must be at least 8 characters long and
							include at least one letter and one number.
						</p>
					</div>

					<div className="mb-6">
						<input
							type="password"
							id="rePassword"
							placeholder="Repeat Password"
							value={rePassword}
							onChange={(e) => setRePassword(e.target.value)}
							onBlur={validateInputs}
							className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-0 ${
								errors.rePassword
									? "border-red-500"
									: "focus:border-primary"
							}`}
						/>
						{errors.rePassword && (
							<p className="text-red-500 text-sm mt-1">
								{errors.rePassword}
							</p>
						)}
					</div>

					<div className="flex items-center mb-6">
						<input
							type="checkbox"
							id="terms"
							checked={termsAccepted}
							onChange={(e) => setTermsAccepted(e.target.checked)}
							className="h-4 w-4 rounded-full border-gray-300 accent-black focus:ring-primary focus:ring-0"
						/>
						<label
							htmlFor="terms"
							className="ml-3 font-medium text-black text-sm"
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

					{/* Submit Button */}
					<button
						type="submit"
						disabled={!isFormValid}
						className={`w-full py-2 px-4 rounded-xl font-medium ${
							isFormValid
								? "bg-primary text-white hover:bg-primary"
								: "bg-secondary text-white cursor-not-allowed"
						}`}
					>
						Next
					</button>
				</form>

				{/* Login Link */}
				<div className="flex justify-center">
					<span className="text-center border-b border-black font-semibold text-xs mt-4">
						Already have an account&#63;
						<Link to="/login" className=" hover:underline ms-2">
							Login
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

export default SignUpForm;
