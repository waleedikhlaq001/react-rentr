import React from "react";
import { NavLink } from "react-router-dom";

function FooterSection() {
	return (
		<div className="border-t bg-[#FAFAFA] mt-12">
			<div className="flex max-w-7xl py-4 mx-auto text-sm justify-between items-center">
				<div>
					<NavLink to="/">Privacy Policy</NavLink>
					<NavLink to="/" className="ms-5">
						Terms of Service
					</NavLink>
				</div>
				<div>&copy; Rentr Solution Ltd</div>
			</div>
		</div>
	);
}

export default FooterSection;
