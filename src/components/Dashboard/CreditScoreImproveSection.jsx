import React from "react";
import creditScoreIndication from "../../assets/images/creditScoreIndication.svg";

function CreditScoreImproveSection() {
	return (
		<div className="px-2">
			<div className="border shadow rounded-xl p-4">
				<img src={creditScoreIndication} alt="" />
				<h1 className="text-2xl font-semibold mt-2 text-gray-800">
					Your credit score is improving!
				</h1>
				<p className="mt-3 md:w-1/2 w-full text-gray-700">
					Paying your rent with Rentr is helping increase your credit
					score every month. The longer you do it, the more it will
					grow.
				</p>
			</div>
		</div>
	);
}

export default CreditScoreImproveSection;
