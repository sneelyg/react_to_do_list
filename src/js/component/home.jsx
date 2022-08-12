import React from "react";
import {Lista} from './lista.jsx'


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1>TO DO LIST</h1>
		
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<Lista />
		</div>
	);
};

export default Home;
