import { useState } from "react";
import "./App.css";
import SelectedBeast from "./SelectedBeast";
import HornedBeast from "./HornedBeast.js";
import { beastData } from "./data.js";

function Main() {
	// set the useState (variable) instances
	const [showSelected, setshowSelected] = useState(false);
	const [modalImg, setmodalImg] = useState("");
	// set up handler function for click on image
	function imgClickHandler(object) {
		console.log("working");
		//toggle state of showSelected
		setshowSelected(!showSelected);
		// set state of modalImg as object with data for image display
		setmodalImg(object);
	}

	return (
		<main>
			{beastData.map((beast) => {
				return (
					<HornedBeast
						beastName={beast.keyword}
						beastImg={beast.image_url}
						beastTitle={beast.title}
						beastDesc={beast.description}
						beastHorns={beast.horns}
						imgClickHandler={imgClickHandler}
					/>
				);
			})}
			;
			{showSelected && (
				<SelectedBeast modalImg={modalImg} imgClickHandler={imgClickHandler} />
			)}
		</main>
	);
}

export default Main;

// _id: 1,
// image_url:
// 	"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
// title: "UniWhal",
// description: "A unicorn and a narwhal nuzzling their horns",
// keyword: "narwhal",
// horns: 1,

// beastName={beastData[0].keyword}
// beastImg={beastData[0].image_url}
// beastTitle={beastData[0].title}
// beastDesc={beastData[0].description}
// beastHorns={beastData[0].horns}
