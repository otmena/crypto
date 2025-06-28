import "./app/styles/App.css";
import Header from "./widgets/ui/header/Header";
import About from "./components/about/About";
import Main from "./components/main/Main";

function App() {
	return (
		<>
			<Header />
			<About />
			<Main />
		</>
	);
}

export default App;
