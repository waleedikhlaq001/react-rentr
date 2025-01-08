import React, { useState } from "react";
import OnboardingNav from "../components/Common/OnboardingNav";
import MobileNumberForm from "../components/Forms/Onboarding/MobileNumberForm";
import OTPForm from "../components/Forms/Onboarding/OTPForm";
import ConfirmDetailsForm from "../components/Forms/Onboarding/ConfirmDetailsForm";
import AddressForm from "../components/Forms/Onboarding/AddressForm";
import RentAmountFrom from "../components/Forms/Onboarding/RentAmountForm";
import RentPaymentDate from "../components/Forms/Onboarding/RentPaymentDate";
import AddDebitCardForm from "../components/Forms/Onboarding/AddDebitCardForm";
import EligibilityCheck from "../components/Forms/Onboarding/EligibilityCheck";
import ReviewDetails from "../components/Forms/Onboarding/ReviewDetails";
import Success from "../components/Forms/Onboarding/Success";
import Error from "../components/Forms/Onboarding/Error";

function Onboarding() {
	const [mobileNumber, setMobileNumber] = useState(""); // Store mobile number
	const [otp, setOtp] = useState(new Array(6).fill("")); // Store OTP
	const [step, setStep] = useState(1); // Track the current step (1 = mobile form, 2 = OTP form)

	// Add state for user details in Onboarding.js
	const [userDetails, setUserDetails] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});

	// Address
	const [address, setAddress] = useState({});

	// Rent Amount
	const [amount, setAmount] = useState(null);

	// Handle mobile number submission
	const handleMobileNumberSubmit = (number) => {
		setMobileNumber(number);
		setStep(2); // Move to the OTP step
	};

	// Handle OTP submission
	const handleOtpSubmit = (otpValue) => {
		setOtp(otpValue);
		console.log("Phone Number:", mobileNumber);
		console.log("OTP:", otpValue.join(""));
		setStep(3);
		// Handle further actions here, e.g., verifying OTP
	};

	// Handle User Details Submit
	const handleUserDetailsSubmit = (details) => {
		setUserDetails(details);
		console.log("Confirmed Details:", details);
		setStep(4);
		// Handle next actions, e.g., submission or final step
	};

	// Handle User Address
	const handleAddress = (address) => {
		setAddress(address);
		setStep(5);
		console.log("address ", address);
	};

	// Handle Rent Amount
	const handleRentAmount = (amount) => {
		setAmount(amount);
		setStep(6);
	};

	const handleDateSubmit = (selectedDate) => {
		setStep(7);
	};

	const handleDebitCard = (selectedDate) => {
		setStep(8);
	};

	const handleEligibilityCheck = () => {
		setStep(9);
	};

	const handleSubmitDetails = () => {
		setStep(10);
	};

	const handleSuccess = () => {
		setStep(11);
	};

	return (
		<div className="bg-[#fafafa] min-h-screen font-bagoss">
			<OnboardingNav />
			<div className="overflow-y-auto">
				{step === 1 && (
					<MobileNumberForm
						mobileNumber={mobileNumber}
						onSubmit={handleMobileNumberSubmit}
					/>
				)}
				{step === 2 && (
					<OTPForm
						otp={otp}
						mobileNumber={mobileNumber}
						onSubmit={handleOtpSubmit}
						onBack={() => setStep(1)} // Allow going back to edit the mobile number
					/>
				)}
				{/* // Add a new step for ConfirmDetailsForm */}
				{step === 3 && (
					<ConfirmDetailsForm
						details={userDetails}
						onSubmit={handleUserDetailsSubmit}
						onBack={() => setStep(2)} // Navigate back to OTP form
					/>
				)}

				{/* // Add a new step for Address */}
				{step === 4 && (
					<AddressForm
						onSubmit={handleAddress}
						onBack={() => setStep(3)} // Navigate back to OTP form
					/>
				)}

				{/* // Add a new step for Rent Amount */}
				{step === 5 && (
					<RentAmountFrom
						onSubmit={handleRentAmount}
						onBack={() => setStep(4)} // Navigate back to OTP form
					/>
				)}

				{/* // Add a new step for Rent Date */}
				{step === 6 && (
					<RentPaymentDate
						onSubmit={handleDateSubmit}
						onBack={() => setStep(5)} // Navigate back to OTP form
					/>
				)}

				{/* // Add a new step for Debit Card */}
				{step === 7 && (
					<AddDebitCardForm
						onSubmit={handleDebitCard}
						onBack={() => setStep(6)} // Navigate back to OTP form
					/>
				)}

				{/* // Add a new step for Eligibility Check */}
				{step === 8 && (
					<EligibilityCheck
						onSubmit={handleEligibilityCheck}
						onBack={() => setStep(7)} // Navigate back to OTP form
					/>
				)}

				{/* // Add a new step for Reivew Details */}
				{step === 9 && (
					<ReviewDetails
						onSubmit={handleSubmitDetails}
						address={address}
						amount={amount}
						onBack={() => setStep(7)} // Navigate back to OTP form
					/>
				)}

				{/* // Add a new step for Success */}
				{step === 10 && (
					<Success
						onSubmit={handleSuccess}
						onBack={() => setStep(7)} // Navigate back to OTP form
					/>
				)}

				{/* // Add a new step for Error */}
				{step === 11 && (
					<Error
						onSubmit={handleEligibilityCheck}
						address={address}
						amount={amount}
						onBack={() => setStep(7)} // Navigate back to OTP form
					/>
				)}
			</div>
		</div>
	);
}

export default Onboarding;
