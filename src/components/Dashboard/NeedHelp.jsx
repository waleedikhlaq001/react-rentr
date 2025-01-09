import React, { useState } from "react";

function NeedHelp() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});

	// Function to handle modal toggle
	const toggleModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	// Function to handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		setErrors((prev) => ({
			...prev,
			[name]: "",
		}));
	};

	// Validation logic
	const validateForm = () => {
		const newErrors = {};
		if (!formData.name.trim()) {
			newErrors.name = "Name is required.";
		}
		if (!formData.email.trim()) {
			newErrors.email = "Email address is required.";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
		) {
			newErrors.email = "Invalid email address.";
		}
		if (!formData.message.trim()) {
			newErrors.message = "Message cannot be empty.";
		}
		return newErrors;
	};

	// Check if form is valid
	const isFormValid = () => {
		return (
			formData.name.trim() &&
			formData.email.trim() &&
			formData.message.trim() &&
			Object.keys(validateForm()).length === 0
		);
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validateForm();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		// Process the form data (e.g., API submission)
		console.log("Form submitted successfully:", formData);

		// Reset form and close modal
		setFormData({
			name: "",
			email: "",
			message: "",
		});
		toggleModal();
	};

	return (
		<>
			<div>
				<button
					onClick={toggleModal}
					className="bg-primary rounded-t bottom-0 border-0 py-2 px-4 text-white text-sm fixed md:right-[7%] right-0 focus:ring-0"
				>
					Need help? Get in touch
				</button>
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center md:items-center items-end z-50">
					<div className="bg-white rounded-lg shadow-lg p-6 md:w-[90%] w-full max-w-md relative">
						{/* Close Button */}
						<button
							onClick={toggleModal}
							className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
						>
							<svg
								width="40"
								height="41"
								viewBox="0 0 40 41"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 20.5C0 9.45431 8.95431 0.5 20 0.5C31.0457 0.5 40 9.45431 40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.95431 40.5 0 31.5457 0 20.5Z"
									fill="#EDEDEF"
								/>
								<path
									d="M25.25 15.25L14.75 25.75M14.75 15.25L25.25 25.75"
									stroke="#475467"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>

						{/* Modal Content */}
						<div>
							<div className="flex flex-col items-center">
								<svg
									width="38"
									height="38"
									viewBox="0 0 38 38"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M27.2783 0.920086L9.21828 6.92009C-2.92172 10.9801 -2.92172 17.6001 9.21828 21.6401L14.5783 23.4201L16.3583 28.7801C20.3983 40.9201 27.0383 40.9201 31.0783 28.7801L37.0983 10.7401C39.7783 2.64009 35.3783 -1.77991 27.2783 0.920086ZM27.9183 11.6801L20.3183 19.3201C20.0183 19.6201 19.6383 19.7601 19.2583 19.7601C18.8783 19.7601 18.4983 19.6201 18.1983 19.3201C17.6183 18.7401 17.6183 17.7801 18.1983 17.2001L25.7983 9.56009C26.3783 8.98009 27.3383 8.98009 27.9183 9.56009C28.4983 10.1401 28.4983 11.1001 27.9183 11.6801Z"
										fill="#0A0A0C"
									/>
								</svg>
								<p className="text-xl font-semibold">
									Get in touch
								</p>
								<p className="text-sm font-medium">
									Need something changed? Let us know in the
									message box below and we’ll get back to you
									within 24 hours.
								</p>
							</div>

							<form onSubmit={handleSubmit}>
								<div className="my-4">
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										placeholder="Name"
										className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-0 ${
											errors.name
												? "border-red-500 focus:ring-red-500"
												: "border-gray-300 focus:ring-primary"
										}`}
									/>
									{errors.name && (
										<p className="text-red-500 text-sm mt-1">
											{errors.name}
										</p>
									)}
								</div>

								<div className="mb-4">
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										placeholder="Email address"
										className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-0 ${
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

								<div className="mb-4">
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										placeholder="Your message"
										className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-0 ${
											errors.message
												? "border-red-500 focus:ring-red-500"
												: "border-gray-300 focus:ring-primary"
										}`}
									></textarea>
									{errors.message && (
										<p className="text-red-500 text-sm mt-1">
											{errors.message}
										</p>
									)}
								</div>

								<div className="bg-white border-t shadow pt-2 md:pt-0 w-full md:w-auto md:bg-transparent md:border-0">
									<button
										type="submit"
										className={`w-full py-3 rounded-xl text-base font-medium transition ${
											isFormValid()
												? "bg-primary text-white hover:bg-primary-dark"
												: "bg-secondary text-white cursor-not-allowed"
										}`}
										disabled={!isFormValid()}
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default NeedHelp;
