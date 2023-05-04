import { useState } from "react";
import SearchResults from "./SearchResults";
import { beastData } from "./data";

function Search() {
	const [results, setresults] = useState({});
	// let letters = new RegExp("ar","gi")

	function handleSearch(event) {
		let searchString = event.target.value;
		let resultsArray = beastData.filter((beast) =>
			findString(searchString, beast)
		);
		setresults(resultsArray);
	}

	function findString(searchString, obj) {
		let word = obj.keyword;
		return word.match(searchString);
	}

	return (
		<div className="search">
			Search
			<input type="text" name="search" id="search" onChange={handleSearch} />
		</div>
	);
}
export default Search;
