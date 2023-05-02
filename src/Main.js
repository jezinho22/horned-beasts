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
					beastDesc={beastData[0].description}
				/>
			</main>
		</div>
	);
}

export default Main;
