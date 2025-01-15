import React from "react";
import Plaid from "../../assets/images/plaid.svg";
import Cbre from "../../assets/images/cbre.svg";
import Reapit from "../../assets/images/reapit.svg";

function Brand() {
	return (
		<div>
			<div className="rounded-xl shadow-md shadow-secondary mb-8 border border-secondary p-12 mt-[8rem]">
				<h1 className="text-primary text-center text-2xl font-semibold">
					Proudly working with
				</h1>
				<div className="flex md:flex-row flex-col justify-center items-center gap-12">
					<div>
						<img src={Plaid} alt="" />
					</div>
					<div>
						<img src={Cbre} alt="" />
					</div>
					<div>
						<img src={Reapit} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Brand;
