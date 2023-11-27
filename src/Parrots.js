import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Privacy from "./Privacy";
import Services from "./Services";
import Home from "./Home";


const Parrots = () => {
	return (
		<div className="home-body">
			<Routes>
				<Route path="Home" element={<Home />} />
				<Route path="AboutUs" element={<AboutUs />} />
				<Route path="ContactUs" element={<ContactUs />} />
				<Route path="Privacy" element={<Privacy />} />
				<Route path="Services" element={<Services />} />
			</Routes>
		</div>
	);
};
export default Parrots;
