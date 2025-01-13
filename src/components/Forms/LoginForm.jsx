import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	// Mock user credentials
	const mockCredentials = {
		email: "test@example.com",
		password: "Password123",
	};

	const handleLogin = (e) => {
		e.preventDefault();
		// Check if email and password match the mock credentials
		if (
			email === mockCredentials.email &&
			password === mockCredentials.password
		) {
			setError("");
			alert("Login successful!"); // Replace with actual login handling
		} else {
			setError(
				"Your password doesn't match what we have on file. Please try again."
			);
		}
	};

	return (
		<div className="min-h-screen font-bagoss flex flex-col items-center pt-[6rem] px-3 bg-[#fafafa]">
			<img src={Logo} className="mb-6" alt="" />
			<div className="max-w-md w-full bg-white p-8 border rounded-xl shadow-md">
				{/* Title */}
				<h2 className="text-2xl font-semibold mb-8">Welcome back</h2>

				{/* Form */}
				<form onSubmit={handleLogin}>
					<div className="mb-4">
						<input
							type="email"
							id="email"
							placeholder="Email address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-0 focus:ring-primary focus:border-primary"
						/>
					</div>
					<div className="mb-4">
						<input
							type="password"
							id="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-0 focus:ring-primary focus:border-primary ${
								error ? "border-red-500" : ""
							}`}
						/>
					</div>

					{/* Error Message */}
					{error && (
						<p className="text-red-500 text-sm mb-4">{error}</p>
					)}

					{/* Submit Button */}
					<button
						type="submit"
						className={`w-full bg-primary text-white py-2 px-4 rounded-xl hover:bg-primary transition ${
							error ? "bg-secondary" : "bg-primary"
						}`}
					>
						Login
					</button>
				</form>

				{/* Sign Up Link */}
				<div className="flex justify-center">
					<span className="text-center border-b border-black font-semibold text-xs mt-4">
						Don’t have an account&#63;
						<Link to="/sign-up" className="hover:underline ms-2">
							Sign up
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
