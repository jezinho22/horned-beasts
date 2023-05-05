function SearchResult({ result, imgClickHandler }) {
	return (
		// provide the options for the select box

		<div
			onClick={() =>
				imgClickHandler({
					image: result.image_url,
					description: result.description,
				})
			}>
			{result.keyword}
		</div>
	);
}

export default SearchResult;
