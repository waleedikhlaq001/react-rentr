import React from "react";
import apple from "../../assets/images/apple.svg";
import google from "../../assets/images/google.svg";
import cartoon from "../../assets/images/herosectionCartoon.svg";

function HeroSection() {
	return (
		<>
			<div className="rounded-xl bg-secondary rounded-lg mb-8 md:mt-12 mt-4 overflow-hidden">
				<div className="grid md:grid-cols-2 ms:grid-cols-1 lg:grid-cols-2 gap-8 ">
					{/* Image Section */}
					<div className="flex justify-center lg:justify-end sm:order-1 md:order-2 lg:order-2">
						<img
							src={cartoon}
							alt="Cartoon Hero"
							className="w-full max-sm:w-[300px] max-sm:h-[300px] lg:max-w-full "
						/>
					</div>

					{/* Text Section */}
					<div className="md:pt-8 pt-0 px-6 lg:pt-[5rem] lg:ps-[5rem] ms:order-2 md:order-1 lg:order-1">
						<h1 className="text-5xl lg:text-6xl font-bagoss font-semibold flex flex-col text-center lg:text-left">
							<span>Pay Rent on</span>
							<span className="mt-2">Your Terms</span>
						</h1>
						<p className="font-[600] mt-6 text-center lg:text-left">
							Rentr offers innovative solutions that simplify the
							rental <br className="hidden lg:block" />
							process for both property managers and tenants,
							creating a <br className="hidden lg:block" />
							seamless and stress-free experience for everyone
							involved.
						</p>
						<div className="flex flex-col lg:flex-row gap-6 mt-8 items-center justify-center lg:justify-start">
							<button className="bg-white shadow-md rounded-full py-2 px-8 font-semibold">
								Sign up now
							</button>
							<button className="font-semibold">
								<span className="border-b border-b-black">
									Speak with our team
								</span>
							</button>
						</div>
						<div className="flex gap-5 mt-8 pb-5 justify-center lg:justify-start">
							<button>
								<img
									src={apple}
									alt="Download on the App Store"
								/>
							</button>
							<button>
								<img src={google} alt="Get it on Google Play" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
