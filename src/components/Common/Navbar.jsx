import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

function Navbar() {
	return (
		<>
			<div className="flex justify-between py-4 items-center">
				<div>
					<Link to="/">
						<img src={Logo} alt="" />
					</Link>
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
