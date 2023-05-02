import "./App.css";

function HornedBeast({ beastImg, beastName, beastDesc }) {
	return (
		<div className="HornedBeast">
			<h2>{beastName}</h2>
			<img className="beastImage" src={beastImg} alt="" title="" />
			<p className="description">{beastDesc}</p>
		</div>
	);
}

export default HornedBeast;
