import React, { useState } from "react";

function AddDebitCardForm({ onSubmit }) {
	const [formValues, setFormValues] = useState({
		cardNumber: "",
		expiryDate: "",
		cvv: "",
		postcode: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
		setErrors({ ...errors, [name]: "" }); // Clear the error for this field
	};

	const validate = () => {
		const newErrors = {};

		if (!formValues.cardNumber.trim()) {
			newErrors.cardNumber = "Card number is required.";
		}

		if (!formValues.expiryDate.trim()) {
			newErrors.expiryDate = "Expiry date is required.";
		}

		if (!formValues.cvv.trim()) {
			newErrors.cvv = "CVV is required.";
		}

		if (!formValues.postcode.trim()) {
			newErrors.postcode = "Postcode is required.";
		}

		return newErrors;
	};

	const isFormValid = () => {
		const newErrors = validate();
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = validate();
		if (Object.keys(newErrors).length === 0) {
			onSubmit(formValues);
		} else {
			setErrors(newErrors);
		}
	};

	return (
		<div className="flex flex-col items-center bg-[#fafafa]">
			<div className="max-w-md w-full p-6">
				<h2 className="text-xl font-semibold mb-2 text-gray-800">
					Add a debit card
				</h2>
				<p className="text-gray-500 text-sm mb-6">
					Link the debit card you’d like used for your payments. Don’t
					worry, we won’t charge you until your rent is due.
				</p>
				<p className="text-gray-600 text-sm mb-6">
					Your rent charges will include a 0.75% card processing fee.
				</p>

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<input
							type="text"
							name="cardNumber"
							placeholder="Card number"
							value={formValues.cardNumber}
							onChange={handleChange}
							className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-0 ${
								errors.cardNumber
									? "border-red-500 focus:ring-red-500"
									: "border-gray-300 focus:ring-primary"
							}`}
						/>
						{errors.cardNumber && (
							<p className="text-red-500 text-sm mt-1">
								{errors.cardNumber}
							</p>
						)}
					</div>

					<div className="grid grid-cols-2 gap-4 mb-4">
						<div>
							<input
								type="text"
								name="expiryDate"
								placeholder="Expiry date"
								value={formValues.expiryDate}
								onChange={handleChange}
								className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-0 ${
									errors.expiryDate
										? "border-red-500 focus:ring-red-500"
										: "border-gray-300 focus:ring-primary"
								}`}
							/>
							{errors.expiryDate && (
								<p className="text-red-500 text-sm mt-1">
									{errors.expiryDate}
								</p>
							)}
						</div>

						<div>
							<input
								type="text"
								name="cvv"
								placeholder="CVV"
								value={formValues.cvv}
								onChange={handleChange}
								className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-0 ${
									errors.cvv
										? "border-red-500 focus:ring-red-500"
										: "border-gray-300 focus:ring-primary"
								}`}
							/>
							{errors.cvv && (
								<p className="text-red-500 text-sm mt-1">
									{errors.cvv}
								</p>
							)}
						</div>
					</div>

					<div className="mb-4">
						<input
							type="text"
							name="postcode"
							placeholder="Postcode"
							value={formValues.postcode}
							onChange={handleChange}
							className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-0 ${
								errors.postcode
									? "border-red-500 focus:ring-red-500"
									: "border-gray-300 focus:ring-primary"
							}`}
						/>
						{errors.postcode && (
							<p className="text-red-500 text-sm mt-1">
								{errors.postcode}
							</p>
						)}
					</div>

					<p className="text-[#101828] text-sm my-5">
						<span className="inline-flex items-center">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.75 11.75C5.75 11.1977 6.19772 10.75 6.75 10.75H17.25C17.8023 10.75 18.25 11.1977 18.25 11.75V17.25C18.25 18.3546 17.3546 19.25 16.25 19.25H7.75C6.64543 19.25 5.75 18.3546 5.75 17.25V11.75Z"
									stroke="#101828"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M7.75008 10.5V10.3427C7.75008 8.78147 7.65615 7.04125 8.74654 5.9239C9.36836 5.2867 10.3746 4.75 12.0001 4.75C13.6256 4.75 14.6318 5.2867 15.2536 5.9239C16.344 7.04125 16.2501 8.78147 16.2501 10.3427V10.5"
									stroke="#101828"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							Your data is secure by bank-level encryption
						</span>
					</p>
				</form>
			</div>

			<div className="fixed bottom-0 left-0 right-0 px-4 py-4 w-full md:max-w-md bg-white shadow-lg md:static md:px-0 md:py-0 md:shadow-none">
				<button
					type="submit"
					className={`w-full py-3 rounded-xl text-base font-medium transition ${
						isFormValid()
							? "bg-primary text-white"
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

export default AddDebitCardForm;
