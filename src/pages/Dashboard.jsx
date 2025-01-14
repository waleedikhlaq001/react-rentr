import React from "react";
import DashboardNav from "../components/Common/DashboardNav";
import WelcomeSecton from "../components/Dashboard/WelcomeSecton";
import WalletSection from "../components/Dashboard/WalletSection";
import CreditScoreImproveSection from "../components/Dashboard/CreditScoreImproveSection";
import DiscoverMoreSection from "../components/Dashboard/DiscoverMoreSection";
import MonthScheduleSection from "../components/Dashboard/MonthScheduleSection";
import PaymentBreakdown from "../components/Dashboard/PaymentBreakDown";
import NeedHelp from "../components/Dashboard/NeedHelp";

function Dashboard() {
	return (
		<div className="container mx-auto font-bagoss">
			<DashboardNav />
			<WelcomeSecton />

			<div className="flex md:flex-row flex-col gap-x-4 px-2 my-10">
				<div className="basis-3/4">
					<WalletSection />
					<MonthScheduleSection />
				</div>
				<div className="basis-1/4">
					<PaymentBreakdown />
				</div>
			</div>

			<CreditScoreImproveSection />
			<DiscoverMoreSection />
			<NeedHelp />
		</div>
	);
}

export default Dashboard;
