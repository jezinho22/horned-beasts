import { useState } from "react";
import SearchResult from "./SearchResult";
import { beastData } from "./data";

function Search({ imgClickHandler }) {
	const [results, setresults] = useState([]);

	function handleSearch(event) {
		if (event.target.value) {
			// turn the string from the input into a regexp
			let searchRegExp = new RegExp(event.target.value, "gi");
			// making a list of matches
			let resultsArray = beastData.filter((beast) =>
				findString(searchRegExp, beast)
			);
			console.log(resultsArray.length);
			// update state with list of matches
			setresults(resultsArray);
		} else {
			setresults([]);
		}
	}
	// search each beast's keyword and return an array of matches
	function findString(searchString, obj) {
		let word = obj.keyword;
		return word.match(searchString);
	}

	return (
		<div className="search">
			Search
			<input type="text" name="search" id="search" onChange={handleSearch} />
			{results.map((result) => {
				return (
					<SearchResult result={result} imgClickHandler={imgClickHandler} />
				);
			})}
		</div>
	);
}
export default Search;
