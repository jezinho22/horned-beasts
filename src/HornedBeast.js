import "./App.css";

function HornedBeast({
	beastImg,
	beastName,
	beastDesc,
	beastHorns,
	beastTitle,
}) {
	return (
		<div className="HornedBeast">
			<h2>{beastName}</h2>
			<img className="beastImage" src={beastImg} alt="" title="" />
			<p className="description">{beastDesc}</p>
			<p className="horns">Horns: {beastHorns}</p>
		</div>
	);
}

export default HornedBeast;

// beastName={beastData[0].keyword}
// beastImg={beastData[0].image_url}
// beastTitle={beastData[0].title}
// beastDesc={beastData[0].description}
// beastHorns={beastData[0].horns}
