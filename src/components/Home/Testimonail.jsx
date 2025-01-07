import React from "react";
import Slider from "react-slick";
import Heart from "../../assets/images/heart.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
	{
		id: 1,
		heading: "Lorem ipsum dolor sit amet",
		rating: 5,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lectus at ex dignissim ullamcorper. Suspendisse at velit sed tortor luctus congue.",
		name: "Steven",
		location: "United Kingdom",
		avatar: "https://via.placeholder.com/50",
	},
	{
		id: 2,
		rating: 5,
		heading: "Lorem ipsum dolor sit amet",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lectus at ex dignissim ullamcorper. Suspendisse at velit sed tortor luctus congue.",
		name: "Steven",
		location: "United Kingdom",
		avatar: "https://via.placeholder.com/50",
	},
	{
		id: 3,
		rating: 5,
		heading: "Lorem ipsum dolor sit amet",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lectus at ex dignissim ullamcorper. Suspendisse at velit sed tortor luctus congue.",
		name: "Steven",
		location: "United Kingdom",
		avatar: "https://via.placeholder.com/50",
	},
	{
		id: 4,
		rating: 5,
		heading: "Lorem ipsum dolor sit amet",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lectus at ex dignissim ullamcorper. Suspendisse at velit sed tortor luctus congue.",
		name: "Steven",
		location: "United Kingdom",
		avatar: "https://via.placeholder.com/50",
	},
	{
		id: 5,
		rating: 5,
		heading: "Lorem ipsum dolor sit amet",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lectus at ex dignissim ullamcorper. Suspendisse at velit sed tortor luctus congue.",
		name: "Steven",
		location: "United Kingdom",
		avatar: "https://via.placeholder.com/50",
	},
	{
		id: 6,
		rating: 5,
		heading: "Lorem ipsum dolor sit amet",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lectus at ex dignissim ullamcorper. Suspendisse at velit sed tortor luctus congue.",
		name: "Steven",
		location: "United Kingdom",
		avatar: "https://via.placeholder.com/50",
	},
	{
		id: 7,
		rating: 5,
		heading: "Lorem ipsum dolor sit amet",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lectus at ex dignissim ullamcorper. Suspendisse at velit sed tortor luctus congue.",
		name: "Steven",
		location: "United Kingdom",
		avatar: "https://via.placeholder.com/50",
	},
	{
		id: 8,
		rating: 5,
		heading: "Lorem ipsum dolor sit amet",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lectus at ex dignissim ullamcorper. Suspendisse at velit sed tortor luctus congue.",
		name: "Steven",
		location: "United Kingdom",
		avatar: "https://via.placeholder.com/50",
	},
	{
		id: 9,
		rating: 5,
		heading: "Lorem ipsum dolor sit amet",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lectus at ex dignissim ullamcorper. Suspendisse at velit sed tortor luctus congue.",
		name: "Steven",
		location: "United Kingdom",
		avatar: "https://via.placeholder.com/50",
	},
	// Add more testimonials here
];

function TestimonialSection() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3.7,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="py-12">
			{/* Header */}
			<div className="text-center mb-10">
				<div className="flex flex-col justify-center items-center gap-2">
					<img src={Heart} alt="" />
					<h2 className="text-2xl text-primary font-semibold">
						Kind words from our users
					</h2>
				</div>
			</div>

			{/* Carousel */}
			<div className=" mx-auto ">
				<Slider {...settings}>
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className=" bg-white gap-6 py-4 transition"
						>
							{/* Star Rating */}
							<div className="shadow-md hover:shadow-lg p-6 me-3 bg-[#FAFAFA] border rounded-lg">
								<div className="flex items-center mb-2">
									{[...Array(testimonial.rating)].map(
										(_, index) => (
											<span
												key={index}
												className="text-yellow-500 text-lg"
											>
												★
											</span>
										)
									)}
								</div>

								{/* Testimonial Text */}
								<p className="font-semibold">
									{testimonial.heading}
								</p>
								<p className="text-gray-700 text-sm mb-4">
									{testimonial.text}
								</p>

								{/* User Info */}
								<div className="flex items-center mt-4">
									<img
										src={testimonial.avatar}
										alt={testimonial.name}
										className="w-10 h-10 rounded-full border"
									/>
									<div className="ml-3">
										<p className="font-semibold">
											{testimonial.name}
										</p>
										<p className="text-sm text-gray-500">
											{testimonial.location}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}

export default TestimonialSection;
