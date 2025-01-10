import React from "react";

function Modal({ isOpen, onClose, children, pause = false }) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center md:items-center items-end z-50">
			<div
				className={`bg-white rounded-lg shadow-lg p-6 md:w-[90%] md:h-auto w-full max-w-md relative ${
					pause ? "h-[85vh]" : ""
				}`}
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
				>
					<svg
						width="40"
						height="41"
						viewBox="0 0 40 41"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 20.5C0 9.45431 8.95431 0.5 20 0.5C31.0457 0.5 40 9.45431 40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.95431 40.5 0 31.5457 0 20.5Z"
							fill="#EDEDEF"
						/>
						<path
							d="M25.25 15.25L14.75 25.75M14.75 15.25L25.25 25.75"
							stroke="#475467"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
				{/* Modal Content */}
				{children}
			</div>
		</div>
	);
}

export default Modal;
