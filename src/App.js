import "./App.css";
import "./reset.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import { useState } from "react";
import { beastData } from "./data";

function App() {
	// set the useState (variable) instances
	const [beastsToDisplay, setbeastsToDisplay] = useState(beastData);

	//set up handler for input change
	function handleChange(event) {
		console.log(event.target.value);
		if (event.target.value) {
			// turn the string from the input into a regexp
			let searchRegExp = new RegExp(event.target.value, "gi");
			// making a list of matches
			let resultsArray = beastData.filter(
				(beast) =>
					findString(searchRegExp, beast.keyword) ||
					findString(searchRegExp, beast.title) ||
					findString(searchRegExp, beast.description)
			);
			// update state with list of matches
			setbeastsToDisplay(resultsArray);
		} else {
			setbeastsToDisplay(beastData);
		}
	}

	// search each beast's keyword and return an array of matches
	function findString(searchRegExp, word) {
		// let word = obj.keyword;
		// let title = obj.title;
		// let desc = obj.desc;
		return word.match(searchRegExp);
	}

	// handle select list in Search
	function handleSelect(event) {
		// check if anything selected
		if (event.target.value) {
			// for 1 to 3 horns
			if (event.target.value > 3) {
				setbeastsToDisplay(beastData.filter((beast) => beast.horns > 3));
			}
			// for more than 3 horns
			else {
				setbeastsToDisplay(
					// using == not === because value for select has to come as a string
					beastData.filter((beast) => beast.horns == event.target.value)
				);
			}
			// for nothing selected
		} else {
			setbeastsToDisplay(beastData);
		}
	}

	return (
		<div className="App">
			<Header handleSelect={handleSelect} handleChange={handleChange} />
			<Main beastsToDisplay={beastsToDisplay} />
			<Footer />
		</div>
	);
}

export default App;
