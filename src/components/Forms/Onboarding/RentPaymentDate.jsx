import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./index.css"; // Ensure the custom styles are imported

function RentPaymentDate({ onSubmit }) {
	const [selectedDate, setSelectedDate] = useState(null);

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (selectedDate) {
			onSubmit(selectedDate); // Pass selected date to parent
		}
	};

	return (
		<div className="flex justify-center mt-[3rem] min-h-screen bg-[#fafafa]">
			<div className="max-w-md w-full p-8">
				<h2 className="text-2xl font-semibold mb-2">
					What date do you pay rent?
				</h2>
				<p className="text-[#475467] text-sm mb-6">
					Lorem ipsum dolor sit amet.
				</p>

				<div className="bg-white border rounded-lg shadow-md">
					<div className="w-full">
						<DatePicker
							selected={selectedDate}
							onChange={(date) => setSelectedDate(date)}
							dateFormat="dd/MM/yyyy"
							className="w-full"
							inline // Shows the calendar directly
						/>
					</div>
				</div>

				{/* Next Button */}
				<form onSubmit={handleSubmit} className="mt-6">
					<button
						type="submit"
						disabled={!selectedDate}
						className={`w-full py-3 rounded-lg ${
							selectedDate
								? "bg-primary text-white "
								: "bg-secondary text-white cursor-not-allowed"
						}`}
					>
						Next
					</button>
				</form>
			</div>
		</div>
	);
}

export default RentPaymentDate;
