import Navbar from "../components/Common/Navbar";
import HeroSection from "../components/Home/HeroSection";
import InformationSection from "../components/Home/InformationSection";
import FlowSection from "../components/Home/FlowSection";
import Brand from "../components/Home/Brand";
import FaqSection from "../components/Home/Faqs";
import Testimonail from "../components/Home/Testimonail";
import FooterSection from "../components/Common/FooterSection";

const Home = () => {
	return (
		<>
			<div className="container max-w-7xl mx-auto px-3">
				<Navbar />
				<HeroSection />
				<InformationSection />
				<FlowSection />
				<Brand />
				<FaqSection />
				<Testimonail />
			</div>
			<FooterSection />
		</>
	);
};

export default Home;
