import "./App.css";
import "./reset.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import SelectedBeast from "./SelectedBeast";
import beastData from "./data.js";

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
