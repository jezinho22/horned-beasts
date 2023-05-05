import "./App.css";
import { useState } from "react";

function HornedBeast({ beast, imgClickHandler }) {
	const [likes, setLikes] = useState(0);

	function handleClickLike() {
		console.log("Clicked!!!");
		setLikes(likes + 1);
	}
	function handleClickUnlike() {
		if (likes > 0) {
			setLikes(likes - 1);
		}
	}
	return (
		<div className="HornedBeast">
			<h2>{beast.title}</h2>
			<p className="horns">Horns: {beast.horns}</p>{" "}
			<img
				className="beastImage"
				src={beast.image_url}
				alt={beast.title}
				title=""
				onClick={() => imgClickHandler(beast)}
			/>
			<p className="description">{beast.description}</p>
			<p className="heart">
				<span onClick={handleClickLike}>❤️</span>
				&nbsp;{likes}&nbsp;
				<span onClick={handleClickUnlike}>🖤</span>
			</p>
		</div>
	);
}

export default HornedBeast;

// beastName={beastData[0].keyword}
// beastImg={beastData[0].image_url}
// beastTitle={beastData[0].title}
// beastDesc={beastData[0].description}
// beastHorns={beastData[0].horns}
