import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

function Navbar() {
	return (
		<>
			<div className="flex justify-between py-4 px-3 items-center">
				<div>
					<Link to="/">
						<img src={Logo} alt="" />
					</Link>
				</div>
				<div>
					<button className="bg-primary rounded-full font-semibold text-white uppercase p-2">
						EB
					</button>
				</div>
			</div>
			<hr />
		</>
	);
}

export default Navbar;
