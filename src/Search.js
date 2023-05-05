function Search({ handleChange, handleSelect }) {
	return (
		<form className="search">
			<label htmlFor="search">Search</label>
			<input type="text" name="search" id="search" onChange={handleChange} />

			<label htmlFor="select">Filter</label>
			<select id="select" onChange={handleSelect}>
				<option value="">All</option>
				<option value="1">1 horn</option>
				<option value="2">2 horns</option>
				<option value="3">3 horns</option>
				<option value="4">A bajillion horns</option>
			</select>
			<fieldset>
				<legend>Sort by</legend>
				<input type="radio" id="by-horns" name="by-horns" value="horns" />
				<label htmlFor="by-horns">horns</label>
				<input type="radio" id="by-likes" name="by-likes" value="likes" />
				<label htmlFor="by-likes">likes</label>
			</fieldset>
		</form>
	);
}
export default Search;
