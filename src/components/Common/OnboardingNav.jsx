import React from "react";

function OnboardingNav() {
	return (
		<>
			<div className="flex justify-between py-3 relative items-center px-12 bg-white border-b shadow">
				<div className="">
					<h1 className="text-4xl font-bold font-bagoss">Rentr</h1>
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
