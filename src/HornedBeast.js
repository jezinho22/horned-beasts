import "./App.css";
import { useState } from "react";

function HornedBeast({
	beastImg,
	beastName,
	beastDesc,
	beastHorns,
	beastTitle,
	imgClickHandler,
}) {
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
			<h2>{beastName}</h2>
			<p className="horns">Horns: {beastHorns}</p>{" "}
			<img
				className="beastImage"
				src={beastImg}
				alt={beastName}
				title=""
				onClick={() =>
					imgClickHandler({ image: beastImg, description: beastDesc })
				}
			/>
			<p className="description">{beastDesc}</p>
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
