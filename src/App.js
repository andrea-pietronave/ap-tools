import React from "react";
import "./styles/css/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Box } from "@mui/material";

import Home from "./components/Home";
import About from "./components/About";
import Counter from "./components/Counter";
import Stopwatch from "./components/Stopwatch";
import Sidebar from "./components/Sidebar";
import ToolBox from "./components/ToolBox";
import Timer from "./components/Timer";

function App() {
	return (
		<Router>
			<Box sx={{ display: "flex", minHeight: "100vh" }}>
				<Sidebar></Sidebar>

				<Switch>
					<Route path="/tool/counter">
						<Counter />
					</Route>
					<Route path="/tool/stopwatch">
						<Stopwatch />
					</Route>
					<Route path="/tool/timer">
						<Timer />
					</Route>
					<Route path="/tool/toolbox">
						<ToolBox />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
				</Switch>
			</Box>
		</Router>
	);
}

export default App;
