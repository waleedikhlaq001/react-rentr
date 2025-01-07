import React from "react";
import { Link } from "react-router-dom";

function SignUpForm() {
	return (
		// bagoss: ['"Bagoss Extended TRIAL"', "sans-serif"],
		<div className="min-h-screen flex font-bagoss flex-col items-center pt-[6rem] px-3 bg-[#fafafa]">
			<h1 className="text-center text-2xl font-bold mb-6 font-bagoss">
				Rentr
			</h1>
			<div className="max-w-md w-full bg-white p-8 border rounded-xl shadow-md">
				{/* Title */}
				<h2 className=" text-2xl font-semibold mb-2">
					Create your free account
				</h2>
				<p className=" text-gray-500 text-sm mb-6">
					Signing up takes just 2 minutes.
				</p>

				{/* Email Input */}
				<form>
					<div className="mb-4">
						<input
							type="email"
							id="email"
							placeholder="Email address"
							className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-0 focus:ring-primary focus:border-primary"
						/>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="w-full bg-primary text-white py-2 px-4 rounded-xl hover:bg-primary transition"
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
