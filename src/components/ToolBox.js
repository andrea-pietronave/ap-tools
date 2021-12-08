import { React, useState } from "react";
import Tool from "./Tool";
import {
	Box,
	TextField,
	MenuItem,
	Button,
	Checkbox,
	FormControlLabel,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function ToolBox() {
	const [allowMultiple, setAllowMultiple] = useState(false);
	const [tools] = useState([]);
	const [currentTools, setCurrentTools] = useState([]);
	const availableTools = ["stopwatch", "timer", "counter", "converter"];

	const changeTools = function () {
		console.log("hello");
		setCurrentTools(
			tools.map((tool) => (
				<div key={tool + Math.random()} className="border">
					<Button
						className="inner-button"
						onClick={() => {
							tools.splice(tools.indexOf(tool), 1);
							changeTools();
						}}
					>
						<RemoveCircleOutlineIcon />
					</Button>
					<Button
						className="inner-button"
						disabled={tools.indexOf(tool) === 0 ? true : false}
						onClick={() => {
							let temp = tools[tools.indexOf(tool) - 1];
							let index = tools.indexOf(tool);
							tools[index - 1] = tool;
							tools[index] = temp;
							console.log(tools);
							changeTools();
						}}
					>
						<ArrowUpwardIcon />
					</Button>
					<Button
						className="inner-button"
						disabled={tools.indexOf(tool) === tools.length - 1 ? true : false}
						onClick={() => {
							let temp = tools[tools.indexOf(tool) + 1];
							let index = tools.indexOf(tool);
							tools[index + 1] = tool;
							tools[index] = temp;
							console.log(tools);
							changeTools();
						}}
					>
						<ArrowDownwardIcon />
					</Button>

					<Tool value={tool}></Tool>
				</div>
			))
		);
	};

	return (
		<Box
			id="toolbox-container"
			display="flex"
			alignContent="center"
			justifyContent="start"
			flexDirection="column"
		>
			<Box
				id="tool-selector"
				display="flex"
				alignContent="center"
				justifyContent="center"
				flexDirection="row"
			>
				<TextField
					select
					id="tool-input"
					label="Tools"
					defaultValue=""
					sx={{ width: "50%" }}
				>
					{availableTools.map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</TextField>
				<Box
					className="tool-selector-buttons"
					display="flex"
					alignContent="center"
					justifyContent="flex-end"
					flexDirection="row"
				>
					<Button
						id="addToolButton"
						variant="contained"
						color="success"
						onClick={() => {
							let toolToAdd = document.getElementById("tool-input").innerHTML;
							if (allowMultiple || !tools.includes(toolToAdd)) {
								tools.push(toolToAdd);
							}
							changeTools();
							console.log(tools);
						}}
					>
						Add
					</Button>
					<Button
						id="addToolButton"
						variant="contained"
						color="warning"
						onClick={() => {
							let toolToRemove =
								document.getElementById("tool-input").innerHTML;
							if (tools.includes(toolToRemove)) {
								tools.splice(tools.indexOf(toolToRemove), 1);
							}
							changeTools();
							console.log(tools);
						}}
					>
						Remove
					</Button>
					<FormControlLabel
						control={<Checkbox />}
						label="Allow multiple"
						checked={allowMultiple}
						onChange={() => setAllowMultiple(!allowMultiple)}
					/>
				</Box>
			</Box>
			<Box className="tools-container">{currentTools}</Box>
		</Box>
	);
}

export default ToolBox;
