import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./header";
import Content from "./content";
//create your first component
const Home = () => {
	return (
	<div>
		<NavBar />
		
		<Content />
	</div>
		
	);
};

export default Home;
