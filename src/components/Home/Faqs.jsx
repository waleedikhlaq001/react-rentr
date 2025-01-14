import React, { useState } from "react";
import QuestionIcon from "../../assets/images/faqMark.svg"; // Replace with your question icon

const faqs = [
	{
		question: "Lorem ipsum dolor sit amet?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lectus at ex dignissim ullamcorper. Suspendisse at velit sed tortor luctus congue.",
	},
	{
		question: "Lorem ipsum dolor sit amet?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lectus at ex dignissim ullamcorper. Suspendisse at velit sed tortor luctus congue.",
	},
	{
		question: "Lorem ipsum dolor sit amet?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lectus at ex dignissim ullamcorper. Suspendisse at velit sed tortor luctus congue.",
	},
	{
		question: "Lorem ipsum dolor sit amet?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lectus at ex dignissim ullamcorper. Suspendisse at velit sed tortor luctus congue.",
	},
	{
		question: "Lorem ipsum dolor sit amet?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lectus at ex dignissim ullamcorper. Suspendisse at velit sed tortor luctus congue.",
	},
];

function FaqSection() {
	const [openIndex, setOpenIndex] = useState(0);

	const toggleFaq = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="py-12 mt-[8rem]">
			{/* Header */}
			<div className="text-center mb-10">
				<div className="flex flex-col justify-center items-center gap-3">
					<img
						src={QuestionIcon}
						alt="Question Icon"
						className="w-8 h-8"
					/>
					<h2 className="text-2xl text-primary font-semibold">
						Frequently asked questions
					</h2>
				</div>
			</div>

			{/* FAQ List */}
			<div className="max-w-3xl mx-auto bg-white rounded-lg border shadow-md px-6 pt-3">
				{faqs.map((faq, index) => (
					<div key={index} className="border-b last:border-none py-4">
						{/* Question */}
						<div
							className="flex justify-between items-center cursor-pointer"
							onClick={() => toggleFaq(index)}
						>
							<p className="font-semibold text-gray-900">
								{faq.question}
							</p>
							<span
								className={`text-pink-500 transform transition ${
									openIndex === index ? "rotate-180" : ""
								}`}
							>
								<svg
									width="8"
									height="5"
									viewBox="0 0 8 5"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.25 0.75L4 4.25L0.75 0.75"
										stroke="#8A8AA3"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
						</div>
						{/* Answer */}
						{openIndex === index && (
							<div className="mt-3 text-gray-600 text-sm">
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default FaqSection;
