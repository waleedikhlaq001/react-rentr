import React from "react";
import infoOne from "../../assets/images/infoOne.svg";
import infoTwo from "../../assets/images/infoTwo.svg";
import infoThree from "../../assets/images/infoThree.svg";

const steps = [
	{
		id: 1,
		image: infoOne,
		title: "Lorem ipsum dolot sit amet",
		description:
			"Open an account and undergo our quick checks to make sure we can extend your rent period.",
	},
	{
		id: 2,
		image: infoTwo,
		title: "Lorem ipsum dolot sit amet",
		description:
			"When it’s due date, you pay half, we pay the rest, and you have 4 weeks to get it back.",
	},
	{
		id: 3,
		image: infoThree,
		title: "Lorem ipsum dolot sit amet",
		description:
			"Track your payment in real time and watch your credit score grow as you rent.",
	},
];

function FlowSection() {
	return (
		<div className="mb-6 px-3">
			{steps.map((step, index) => (
				<div
					key={step.id}
					className={`grid md:grid-cols-2 gap-5 sm:grid-cols-1 mt-5`}
				>
					{/* Image Section */}
					<div
						className={`flex justify-center ${
							index % 2 === 1 ? "md:order-2" : ""
						}`}
					>
						<img src={step.image} className="cover" alt="" />
					</div>
					{/* Content Section */}
					<div
						className={`flex flex-col justify-center md:items-start items-center md:ps-9 ps-0 md:text-start text-center ${
							index % 2 === 1 ? "md:order-1" : ""
						}`}
					>
						<div className="">
							<span className="bg-primary text-white rounded-full p-3 py-2">
								{step.id}
							</span>
						</div>
						<h1 className="text-3xl font-semibold my-4">
							{step.title}
						</h1>
						<p>{step.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default FlowSection;
