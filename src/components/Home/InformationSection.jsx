import React from "react";

function InformationSection() {
	return (
		<div className="flex flex-col justify-center items-center text-center mb-5 pt-12 ">
			<h1 className="text-4xl text-primary font-bold">
				Lorem ipsum dolot sit amet
			</h1>
			<p className="font-semibold md:px-12 px-5 mt-5">
				Rentr offers innovative solutions that simplify the rental
				process for both property managers and tenants, creating a
				seamless and stress-free experience for everyone involved.
			</p>

			<button className="bg-primary text-white shadow-md rounded-full py-2 px-8 font-semibold mt-5">
				Sign up now
			</button>
		</div>
	);
}

export default InformationSection;
