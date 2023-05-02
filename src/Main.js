import "./App.css";
import HornedBeast from "./HornedBeast.js";
import { beastData } from "./data.js";

function Main() {
	return (
		<div className="Main">
			<main>
				<HornedBeast
					beastName={beastData[0].keyword}
					beastImg={beastData[0].image_url}
					beastTitle={beastData[0].title}
					beastDesc={beastData[0].description}
					beastHorns={beastData[0].horns}
				/>
			</main>
		</div>
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
