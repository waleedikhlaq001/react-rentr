import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import AccountModal from "../Dashboard/AccountModal";

function Navbar() {
	const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

	const toggleAccountModal = () => {
		setIsAccountModalOpen((prev) => !prev);
	};

	return (
		<>
			<div className="flex justify-between py-4 px-3 items-center">
				<div>
					<Link to="/">
						<img src={Logo} alt="Logo" />
					</Link>
				</div>
				<div>
					<button
						onClick={toggleAccountModal}
						className="bg-primary rounded-full font-semibold text-white uppercase px-2 py-2"
					>
						EB
					</button>
				</div>
			</div>
			<hr />

			{/* Account Modal */}
			<AccountModal
				isOpen={isAccountModalOpen}
				onClose={toggleAccountModal}
			/>
		</>
	);
}

export default Navbar;
