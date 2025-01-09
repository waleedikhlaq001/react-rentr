import React from "react";
import DashboardNav from "../components/Common/DashboardNav";
import WelcomeSecton from "../components/Dashboard/WelcomeSecton";
import WalletSection from "../components/Dashboard/WalletSection";
import CreditScoreImproveSection from "../components/Dashboard/CreditScoreImproveSection";
import DiscoverMoreSection from "../components/Dashboard/DiscoverMoreSection";

function Dashboard() {
	return (
		<div className="container mx-auto font-bagoss">
			<DashboardNav />
			<WelcomeSecton />

			<div className="flex md:flex-row flex-col gap-x-4 my-10">
				<div className="basis-3/4">
					<WalletSection />
				</div>
				<div className="basis-1/4 border-2 border-rose-600"></div>
			</div>

			<CreditScoreImproveSection />
			<DiscoverMoreSection />
		</div>
	);
}

export default Dashboard;
