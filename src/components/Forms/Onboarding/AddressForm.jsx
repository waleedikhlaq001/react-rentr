import React, { useState } from "react";

function AddressForm({ onSubmit }) {
	// Sample addresses
	const addresses = [
		{
			id: 1,
			name: "John Doe",
			street: "123 Elm St",
			city: "Springfield",
			postalCode: "12345",
		},
		{
			id: 2,
			name: "Jane Smith",
			street: "456 Oak St",
			city: "Shelbyville",
			postalCode: "12345",
		},
		{
			id: 3,
			name: "Alice Johnson",
			street: "789 Pine St",
			city: "Ogdenville",
			postalCode: "67890",
		},
		{
			id: 4,
			name: "Bob Brown",
			street: "101 Maple St",
			city: "Capitol City",
			postalCode: "67890",
		},
	];

	const [postcode, setPostcode] = useState("");
	const [filteredAddresses, setFilteredAddresses] = useState([]);
	const [selectedAddress, setSelectedAddress] = useState(null);
	const [errors, setErrors] = useState({});

	// Handle postcode input change
	const handleChange = (e) => {
		const value = e.target.value;
		setPostcode(value);

		// Filter addresses based on the input
		if (value.trim()) {
			const matches = addresses.filter((address) =>
				address.postalCode.startsWith(value)
			);
			setFilteredAddresses(matches);
		} else {
			setFilteredAddresses([]);
		}
	};

	// Handle address selection
	const handleSelect = (address) => {
		setSelectedAddress(address);
		onSubmit(address);
		setPostcode(""); // Clear the input field
		setFilteredAddresses([]); // Clear the suggestions
	};

	return (
		<div className="flex mt-4 justify-center bg-[#fafafa]">
			<div className="max-w-md w-full p-8">
				<h2 className="text-2xl font-semibold mb-2">
					Where do you live?
				</h2>
				<p className="text-[#475467] text-sm mb-10">
					Search by property name or address. If you don't see your
					property here, we'll do some other checks to see if you can
					use Rentr.
				</p>
				<div className="grid grid-cols-1 gap-5">
					{/* Postcode Input */}
					<div className="mb-4">
						<input
							type="text"
							id="postcode"
							name="postcode"
							placeholder="Start typing your postcode"
							value={postcode}
							onChange={handleChange}
							className={`w-full border rounded-xl px-3 py-2 focus:outline-none ${
								errors.postcode
									? "border-red-500"
									: "border-gray-300"
							}`}
						/>
						{errors.postcode && (
							<p className="text-red-500 text-sm mt-1">
								{errors.postcode}
							</p>
						)}
					</div>
				</div>

				{/* Address Suggestions */}
				{filteredAddresses.length > 0 && (
					<div className="bg-white w-full border rounded-xl py-2 shadow-md mb-8">
						<ul>
							{filteredAddresses.map((address) => (
								<li
									key={address.id}
									className="py-2 px-3 hover:bg-[#F478BA0A] hover:border-l-primary hover:border-l-2 cursor-pointer"
									onClick={() => handleSelect(address)}
								>
									<p className="font-semibold">
										{address.name}
									</p>
									<p className="text-sm text-gray-600">
										{address.street}, {address.city} -{" "}
										{address.postalCode}
									</p>
								</li>
							))}
						</ul>
					</div>
				)}

				{/* Manual Address Entry */}
				<span className="text-primary border-b border-b-primary cursor-pointer mt-10">
					I can't find my address
				</span>
			</div>
		</div>
	);
}

export default AddressForm;
