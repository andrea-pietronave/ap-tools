import React from "react";
import Stopwatch from "./Stopwatch";
import Counter from "./Counter";
import { Box } from "@mui/material";

function ToolBox() {
	return (
		<Box>
			<Box>
				<Stopwatch></Stopwatch>
			</Box>
			<Box>
				<Counter></Counter>
			</Box>
		</Box>
	);
}

export default ToolBox;
