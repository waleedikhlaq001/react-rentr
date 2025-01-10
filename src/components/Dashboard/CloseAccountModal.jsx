import React from "react";
import Modal from "../Common/Modal";

function CloseAccountModal({ isOpen, onClose }) {
	return (
		<Modal isOpen={isOpen} onClose={onClose} pause={true}>
			{/* Pause Account Modal Content */}
			<div className="text-center">
				{/* Pause Icon */}

				<div className="flex justify-center items-center mx-auto mb-4 md:mt-0 mt-12">
					<svg
						width="38"
						height="40"
						viewBox="0 0 38 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M34.0198 7.7L22.1398 0.84C20.1998 -0.28 17.7998 -0.28 15.8398 0.84L3.97984 7.7C2.03984 8.82 0.839844 10.9 0.839844 13.16V26.84C0.839844 29.08 2.03984 31.16 3.97984 32.3L15.8598 39.16C17.7998 40.28 20.1998 40.28 22.1598 39.16L34.0398 32.3C35.9798 31.18 37.1798 29.1 37.1798 26.84V13.16C37.1598 10.9 35.9598 8.84 34.0198 7.7ZM17.4998 11.5C17.4998 10.68 18.1798 10 18.9998 10C19.8198 10 20.4998 10.68 20.4998 11.5V22C20.4998 22.82 19.8198 23.5 18.9998 23.5C18.1798 23.5 17.4998 22.82 17.4998 22V11.5ZM20.8398 29.26C20.7398 29.5 20.5998 29.72 20.4198 29.92C20.0398 30.3 19.5398 30.5 18.9998 30.5C18.7398 30.5 18.4798 30.44 18.2398 30.34C17.9798 30.24 17.7798 30.1 17.5798 29.92C17.3998 29.72 17.2598 29.5 17.1398 29.26C17.0398 29.02 16.9998 28.76 16.9998 28.5C16.9998 27.98 17.1998 27.46 17.5798 27.08C17.7798 26.9 17.9798 26.76 18.2398 26.66C18.9798 26.34 19.8598 26.52 20.4198 27.08C20.5998 27.28 20.7398 27.48 20.8398 27.74C20.9398 27.98 20.9998 28.24 20.9998 28.5C20.9998 28.76 20.9398 29.02 20.8398 29.26Z"
							fill="#ED4A4A"
						/>
					</svg>
				</div>
				{/* Modal Header */}
				<h2 className="text-xl font-semibold mb-2 text-[#ED4A4A]">
					Close account
				</h2>
				{/* Modal Description */}
				<p className="text-gray-800 font-medium text-xs mb-6">
					Are you sure you want to close your account? This will mean
					Rentr won't cover any future rent payments. This action
					cannot be undone.
				</p>
				{/* Actions */}
				<div className="flex flex-col items-center gap-3  bg-white md:border-t-0 border-t md:relative fixed bottom-0 w-full left-0 px-3 py-3">
					<button
						className="bg-[#ED4A4A] text-white w-full py-2 px-4 rounded-lg text-sm font-medium"
						onClick={onClose} // You can handle pause logic here
					>
						Confirm closure
					</button>
					<span
						className="text-gray-800 cursor-pointer !w-auto font-medium text-xs border-b border-b-gray-800 hover:text-gray-800"
						onClick={onClose}
					>
						No, go back without closing account
					</span>
				</div>
			</div>
		</Modal>
	);
}

export default CloseAccountModal;
