import React, { useState } from "react";
import Modal from "../Common/Modal";
import PauseAccountModal from "./PauseAccountModal";
import CloseAccountModal from "./CloseAccountModal";

function AccountModal({ isOpen, onClose }) {
	const [isPauseModalOpen, setIsPauseModalOpen] = useState(false);
	const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);

	const handlePauseClick = () => {
		onClose(); // Close AccountModal
		setIsPauseModalOpen(true); // Open PauseAccountModal
	};

	const handleCloseClick = () => {
		onClose(); // Close AccountModal
		setIsCloseModalOpen(true); // Open PauseAccountModal
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				{/* Account Modal Content */}
				<div className="flex flex-col items-center">
					<div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-semibold mb-4">
						EB
					</div>
					<h2 className="text-xl font-bold">Elaine Bennet</h2>
					<p className="text-gray-500 text-xs">
						Using Rentr since 2024
					</p>
				</div>

				<div>
					<p className="text-xs text-gray-500 mt-5">
						Something changed?
					</p>
					<div className="border rounded-lg p-4 mt-1 shadow-sm">
						<div className="flex items-center cursor-pointer justify-between py-2">
							<div className="flex items-center gap-3">
								<div>
									<svg
										width="18"
										height="21"
										viewBox="0 0 18 21"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M17.6191 6.95C16.5691 2.33 12.5391 0.25 8.99912 0.25C8.99912 0.25 8.99912 0.25 8.98912 0.25C5.45912 0.25 1.41912 2.32 0.369119 6.94C-0.800881 12.1 2.35912 16.47 5.21912 19.22C6.27912 20.24 7.63912 20.75 8.99912 20.75C10.3591 20.75 11.7191 20.24 12.7691 19.22C15.6291 16.47 18.7891 12.11 17.6191 6.95ZM8.99912 11.96C7.25912 11.96 5.84912 10.55 5.84912 8.81C5.84912 7.07 7.25912 5.66 8.99912 5.66C10.7391 5.66 12.1491 7.07 12.1491 8.81C12.1491 10.55 10.7391 11.96 8.99912 11.96Z"
											fill="#475467"
										/>
									</svg>
								</div>
								<span className="text-sm font-medium text-gray-800">
									My address has changed
								</span>
							</div>
							<div>
								<svg
									width="5"
									height="9"
									viewBox="0 0 5 9"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0.75 1.25L4.25 4.5L0.75 7.75"
										stroke="#101828"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
						<hr className="my-2" />

						<div className="flex items-center cursor-pointer justify-between py-2">
							<div className="flex items-center gap-3">
								<div>
									<svg
										width="20"
										height="17"
										viewBox="0 0 20 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M15 0H5C2 0 0 1.5 0 5V12C0 15.5 2 17 5 17H15C18 17 20 15.5 20 12V5C20 1.5 18 0 15 0ZM4.25 11C4.25 11.41 3.91 11.75 3.5 11.75C3.09 11.75 2.75 11.41 2.75 11V6C2.75 5.59 3.09 5.25 3.5 5.25C3.91 5.25 4.25 5.59 4.25 6V11ZM10 11.5C8.34 11.5 7 10.16 7 8.5C7 6.84 8.34 5.5 10 5.5C11.66 5.5 13 6.84 13 8.5C13 10.16 11.66 11.5 10 11.5ZM17.25 11C17.25 11.41 16.91 11.75 16.5 11.75C16.09 11.75 15.75 11.41 15.75 11V6C15.75 5.59 16.09 5.25 16.5 5.25C16.91 5.25 17.25 5.59 17.25 6V11Z"
											fill="#475467"
										/>
									</svg>
								</div>
								<span className="text-sm font-medium text-gray-800">
									My rent amount has changed
								</span>
							</div>
							<div>
								<svg
									width="5"
									height="9"
									viewBox="0 0 5 9"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0.75 1.25L4.25 4.5L0.75 7.75"
										stroke="#101828"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>

				<div>
					<p className="text-xs text-gray-500 mt-5">Actions</p>
					<div className="border rounded-lg p-4 mt-1 shadow-sm">
						<div className="flex items-center cursor-pointer justify-between py-2">
							<div
								className="flex items-center gap-3 cursor-pointer "
								onClick={handlePauseClick}
							>
								<div>
									<svg
										width="24"
										height="25"
										viewBox="0 0 24 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11.9707 2.5C6.4507 2.5 1.9707 6.98 1.9707 12.5C1.9707 18.02 6.4507 22.5 11.9707 22.5C17.4907 22.5 21.9707 18.02 21.9707 12.5C21.9707 6.98 17.5007 2.5 11.9707 2.5ZM10.7207 15.53C10.7207 16.01 10.5207 16.2 10.0107 16.2H8.7107C8.2007 16.2 8.0007 16.01 8.0007 15.53V9.47C8.0007 8.99 8.2007 8.8 8.7107 8.8H10.0007C10.5107 8.8 10.7107 8.99 10.7107 9.47V15.53H10.7207ZM16.0007 15.53C16.0007 16.01 15.8007 16.2 15.2907 16.2H14.0007C13.4907 16.2 13.2907 16.01 13.2907 15.53V9.47C13.2907 8.99 13.4907 8.8 14.0007 8.8H15.2907C15.8007 8.8 16.0007 8.99 16.0007 9.47V15.53Z"
											fill="#475467"
										/>
									</svg>
								</div>
								<span className="text-sm font-medium text-gray-800">
									Pause account
								</span>
							</div>
							<div>
								<svg
									width="5"
									height="9"
									viewBox="0 0 5 9"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0.75 1.25L4.25 4.5L0.75 7.75"
										stroke="#101828"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
						<hr className="my-2" />

						<div
							onClick={handleCloseClick}
							className="flex items-center cursor-pointer justify-between py-2"
						>
							<div className="flex items-center gap-3">
								<div>
									<svg
										width="20"
										height="21"
										viewBox="0 0 20 21"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M17.5099 4.35L11.5699 0.92C10.5999 0.36 9.39992 0.36 8.41992 0.92L2.48992 4.35C1.51992 4.91 0.919922 5.95 0.919922 7.08V13.92C0.919922 15.04 1.51992 16.08 2.48992 16.65L8.42992 20.08C9.39992 20.64 10.5999 20.64 11.5799 20.08L17.5199 16.65C18.4899 16.09 19.0899 15.05 19.0899 13.92V7.08C19.0799 5.95 18.4799 4.92 17.5099 4.35ZM9.24992 6.25C9.24992 5.84 9.58992 5.5 9.99992 5.5C10.4099 5.5 10.7499 5.84 10.7499 6.25V11.5C10.7499 11.91 10.4099 12.25 9.99992 12.25C9.58992 12.25 9.24992 11.91 9.24992 11.5V6.25ZM10.9199 15.13C10.8699 15.25 10.7999 15.36 10.7099 15.46C10.5199 15.65 10.2699 15.75 9.99992 15.75C9.86992 15.75 9.73992 15.72 9.61992 15.67C9.48992 15.62 9.38992 15.55 9.28992 15.46C9.19992 15.36 9.12992 15.25 9.06992 15.13C9.01992 15.01 8.99992 14.88 8.99992 14.75C8.99992 14.49 9.09992 14.23 9.28992 14.04C9.38992 13.95 9.48992 13.88 9.61992 13.83C9.98992 13.67 10.4299 13.76 10.7099 14.04C10.7999 14.14 10.8699 14.24 10.9199 14.37C10.9699 14.49 10.9999 14.62 10.9999 14.75C10.9999 14.88 10.9699 15.01 10.9199 15.13Z"
											fill="#ED4A4A"
										/>
									</svg>
								</div>
								<span className="text-sm font-medium text-[#ED4A4A]">
									Close account
								</span>
							</div>
							<div>
								<svg
									width="5"
									height="9"
									viewBox="0 0 5 9"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0.75 1.25L4.25 4.5L0.75 7.75"
										stroke="#101828"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</Modal>

			{/* Pause Account Modal */}
			<PauseAccountModal
				isOpen={isPauseModalOpen}
				onClose={() => setIsPauseModalOpen(false)}
			/>

			{/* Close Account Modal */}
			<CloseAccountModal
				isOpen={isCloseModalOpen}
				onClose={() => setIsCloseModalOpen(false)}
			/>
		</>
	);
}

export default AccountModal;
