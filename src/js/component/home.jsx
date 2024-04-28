import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "../../../src/js/component/Navbar.jsx";
import Jumbotron from "../../../src/js/component/Jumbotron.jsx";
import Card from "../../../src/js/component/Card.jsx";
import Footer from "../../../src/js/component/Footer.jsx";

//create your first component
function Home() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron/>
				<Card/>
			</div>
			<Footer/>
		</>
	);
};

export default Home;
