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
		<div className="flex justify-center mt-4 bg-[#fafafa]">
			<div className="max-w-md w-full p-8 ">
				<h2 className="text-2xl font-semibold mb-2">
					What date do you pay rent?
				</h2>
				<p className="text-[#475467] text-sm mb-6">
					Lorem ipsum dolor sit amet.
				</p>

				<div className="bg-white border rounded-lg shadow-md mb-4">
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

				{/* Fixed Button at the Bottom */}
				<div className="fixed border-t md:border-t-0 bottom-0 left-0 right-0 px-4 py-4 w-full md:max-w-md md:bg-transparent bg-white shadow-lg md:static md:px-0 md:py-0 md:shadow-none">
					<form onSubmit={handleSubmit} className="">
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
		</div>
	);
}

export default RentPaymentDate;
