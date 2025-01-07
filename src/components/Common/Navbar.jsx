import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<>
			<div className="flex justify-between py-4 items-center">
				<div>
					<h1 className="text-4xl font-bold font-bagoss">Rentr</h1>
				</div>
				<div>
					<ul className="flex gap-x-5">
						<li>
							<NavLink to="/about" className="font-[500]">
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/login"
								className="border border-black px-5 rounded-full py-1"
							>
								Login
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Navbar;
