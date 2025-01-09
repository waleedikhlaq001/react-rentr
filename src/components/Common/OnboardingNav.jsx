import React from "react";
import Logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";

function OnboardingNav() {
	return (
		<>
			<div className="flex justify-between py-3 relative items-center md:px-12 px-3 bg-white border-b shadow">
				<div className="">
					<Link to="/">
						<img src={Logo} alt="" />
					</Link>
				</div>
				<div>
					<p className="text-[#0A0A0C]">7 questions left</p>
				</div>
				<div className="absolute left-0 bottom-0 w-[30%] border-b-[2.5px] border-b-primary"></div>
			</div>
		</>
	);
}

export default OnboardingNav;
