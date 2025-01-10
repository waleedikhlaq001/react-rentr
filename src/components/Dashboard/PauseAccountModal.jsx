import React from "react";
import Modal from "../Common/Modal";

function PauseAccountModal({ isOpen, onClose }) {
	return (
		<Modal isOpen={isOpen} onClose={onClose} pause={true}>
			{/* Pause Account Modal Content */}
			<div className="text-center">
				{/* Pause Icon */}

				<div className="flex justify-center items-center mx-auto mb-4 md:mt-0 mt-12">
					<svg
						width="41"
						height="41"
						viewBox="0 0 41 41"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20.9414 0.5C9.90141 0.5 0.941406 9.46 0.941406 20.5C0.941406 31.54 9.90141 40.5 20.9414 40.5C31.9814 40.5 40.9414 31.54 40.9414 20.5C40.9414 9.46 32.0014 0.5 20.9414 0.5ZM18.4414 26.56C18.4414 27.52 18.0414 27.9 17.0214 27.9H14.4214C13.4014 27.9 13.0014 27.52 13.0014 26.56V14.44C13.0014 13.48 13.4014 13.1 14.4214 13.1H17.0014C18.0214 13.1 18.4214 13.48 18.4214 14.44V26.56H18.4414ZM29.0014 26.56C29.0014 27.52 28.6014 27.9 27.5814 27.9H25.0014C23.9814 27.9 23.5814 27.52 23.5814 26.56V14.44C23.5814 13.48 23.9814 13.1 25.0014 13.1H27.5814C28.6014 13.1 29.0014 13.48 29.0014 14.44V26.56Z"
							fill="#0A0A0C"
						/>
					</svg>
				</div>
				{/* Modal Header */}
				<h2 className="text-xl font-semibold mb-2">Pause account</h2>
				{/* Modal Description */}
				<p className="text-gray-800 font-medium text-xs mb-6">
					Are you sure you want to pause your account? This will mean
					Rentr won’t cover your rent next month, your credit booster
					will still be active, and your membership will still be
					charged.
				</p>
				{/* Actions */}
				<div className="flex flex-col items-center gap-3  bg-white md:border-t-0 border-t md:relative fixed bottom-0 w-full left-0 px-3 py-3">
					<button
						className="bg-orange-500 text-white w-full py-2 px-4 rounded-lg text-sm font-medium hover:bg-orange-600"
						onClick={onClose} // You can handle pause logic here
					>
						Pause account
					</button>
					<span
						className="text-gray-800 cursor-pointer !w-auto font-medium text-xs border-b border-b-gray-800 hover:text-gray-800"
						onClick={onClose}
					>
						No, go back without pausing
					</span>
				</div>
			</div>
		</Modal>
	);
}

export default PauseAccountModal;
