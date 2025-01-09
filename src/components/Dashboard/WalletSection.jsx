import React from "react";

function WalletSection() {
	return (
		<div className="px-2">
			<div className="border shadow rounded-xl p-4 grid md:grid-cols-2 grid-cols-1">
				<div>
					<h1 className="text-2xl font-semibold">
						You owe £1,010.00
					</h1>
					<p className="font-semibold mt-2">
						You have 4 days to pay it on 14th January 2025
					</p>
				</div>

				<div className="flex md:justify-end justify-center items-center gap-3 md:mt-0 mt-4">
					<div>
						<button className="border-2 text-sm border-black rounded-full py-2 px-6">
							Pay full balance
						</button>
					</div>
					<div>
						<button className="border-0 text-sm bg-[#EDEDEF] rounded-full py-2 px-6">
							Pay other amount
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WalletSection;