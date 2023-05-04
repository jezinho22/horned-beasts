import SearchOptions from "./SearchOptions";
import { beastData } from "./data";

function Search() {
	return (
		<div>
			<form>
				<button>Search</button>
				<select name="search" id="search">
					{beastData.map((beast) => {
						return <SearchOptions beast={beast.keyword} />;
					})}
					<SearchOptions />
				</select>
			</form>
			Search
		</div>
	);
}
export default Search;
