import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/sign-up" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/onboarding" element={<Onboarding />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
