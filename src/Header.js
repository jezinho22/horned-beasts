import "./App.css";
import Search from "./Search";

function Header({ handleChange, handleSelect }) {
	return (
		<header>
			<h1>Horned Beasts</h1>
			<Search handleChange={handleChange} handleSelect={handleSelect} />
		</header>
	);
}

export default Header;
