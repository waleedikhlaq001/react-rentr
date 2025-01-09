import React from "react";
import Chart from "react-apexcharts";

function PaymentBreakdown() {
	// Chart options and data
	const chartOptions = {
		chart: {
			type: "donut",
		},
		labels: ["You paid", "Rentr paid"],
		colors: ["#4f46e5", "#ec4899"], // Match the blue and pink colors
		legend: {
			show: true,
			position: "bottom",
			horizontalAlign: "center",
			labels: {
				colors: "#000", // Legend text color
			},
			markers: {
				width: 12,
				height: 12,
				radius: 12,
			},
		},
		dataLabels: {
			enabled: false, // Disable data labels inside the chart
		},
		states: {
			hover: {
				filter: {
					type: "none",
				},
			},
		},
		tooltip: {
			enabled: true,
		},
		plotOptions: {
			pie: {
				donut: {
					size: "70%", // Size of the donut
					labels: {
						show: true,
						total: {
							show: true,
							label: "Total paid",
							fontSize: "16px",
							fontWeight: 600,
							color: "#000",
							formatter: () => "£2,000",
						},
					},
				},
			},
		},
	};

	const chartSeries = [60, 40]; // 60% You Paid, 40% Rentr Paid

	return (
		<div className="p-6 bg-white border rounded-lg shadow-md max-w-sm mx-auto md:mt-0 mt-5 mx-2">
			{/* Header */}
			<h2 className="text-2xl font-semibold text-gray-800 mb-4">
				Payment breakdown
			</h2>

			{/* Chart */}
			<div>
				<Chart
					options={chartOptions}
					series={chartSeries}
					type="donut"
					height="250"
				/>
			</div>

			{/* Description */}
			<p className="text-sm font-medium text-gray-500 mt-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Maecenas orci arcu, venenatis id orci quis, elementum laoreet
				urna.
			</p>
		</div>
	);
}

export default PaymentBreakdown;
