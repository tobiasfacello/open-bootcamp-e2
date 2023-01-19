import logo from "./logo.svg";
import "./App.css";
// import Clock from "./components/pure/clock";
import ClockF from "./components/pure/clockF";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				Learn React
			</header>
			<ClockF></ClockF>
			{/* <ClockF></ClockF> */}
		</div>
	);
}

export default App;
