/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import {
	Grid,
	Button,
	TextField,
	Checkbox,
	FormControlLabel,
	Box,
} from "@mui/material";

function Stopwatch() {
	const [timer, setTimer] = useState(0);
	const [active, setActive] = useState(false);
	const [splices, setSplices] = useState([]);
	const [splicesArray, setSplicesArray] = useState([]);
	const [maxSplices, setMaxSplices] = useState(5);
	const [spliceID, setSpliceId] = useState([]);

	const countRef = useRef(null);

	const formatTime = (deltaTimer) => {
		const getHundredSeconds = `0${deltaTimer}`.slice(-2);
		const seconds = `${Math.floor(deltaTimer / 100)}`;
		const getSeconds = `0${seconds % 60}`.slice(-2);
		const minutes = `${Math.floor(seconds / 60)}`;
		const getMinutes = `0${minutes}`.slice(-2);
		const hours = `0${Math.floor(minutes / 60)}`.slice(-2);
		const getHours = `0${hours % 24}`.slice(-2);

		return `${getHours} : ${getMinutes} : ${getSeconds} : ${getHundredSeconds}`;
	};

	const startTimer = function () {
		setActive(true);
		countRef.current = setInterval(() => {
			setTimer((timer) => timer + 1);
		}, 10);
	};

	const resetTimer = function () {
		setActive(false);
		clearInterval(countRef.current);
		setTimer(0);

		initialize();
	};

	const pauseTimer = function () {
		setActive(false);
		console.log(active);
		clearInterval(countRef.current);
	};

	const spliceTimer = function () {
		splices.unshift(formatTime(timer));
		splicesArray.pop();
		splicesArray.unshift(
			<li key={"splice" + splices.length}>{formatTime(timer)}</li>
		);
	};

	const initialize = function () {
		let idTemp = [];
		let spliceTemp = [];
		for (let index = 0; index < maxSplices; index++) {
			idTemp[index] = <li key={"id" + index}>{index + 1}.</li>;
		}
		setSpliceId(idTemp);
		for (let index = 0; index < maxSplices; index++) {
			spliceTemp[index] = <li key={"tsplice" + index}>{formatTime(0)}</li>;
		}
		setSplicesArray(spliceTemp);
	};

	useEffect(() => {
		initialize();
	}, [maxSplices]);

	return (
		<Box
			id="stopwatch-container"
			container
			display="flex"
			justifyContent="flex-start"
			alignItems="center"
			flexDirection="column"
		>
			<Box
				className="inner-container"
				container
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="row"
			>
				<Box
					container
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
				>
					<Box
						container
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						className="input-container"
					>
						<TextField
							id="maxSplices"
							label="Max Splices"
							variant="standard"
							type="number"
							value={maxSplices}
							InputProps={{
								inputProps: {
									min: 0,
								},
							}}
							onChange={(e) => {
								setMaxSplices(parseInt(e.target.value));
							}}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Box>
					<p className="timer">{formatTime(timer)}</p>

					<Box container item justifyContent="center" className="timer-buttons">
						<Button
							id="resetButton"
							variant="contained"
							color="error"
							onClick={resetTimer}
						>
							Reset timer
						</Button>
						<Button id="spliceButton" variant="contained" onClick={spliceTimer}>
							Splice timer
						</Button>
						<Button
							id="startButton"
							variant="contained"
							color={active ? "warning" : "success"}
							onClick={active ? pauseTimer : startTimer}
						>
							{active ? "Pause Timer" : "Start Timer"}
						</Button>
					</Box>
				</Box>
			</Box>

			<Box
				container
				item
				justifyContent="center"
				alignContent="center"
				className="splices-container"
				display="flex"
				flexDirection="column"
				alignItems="center"
			>
				<p>
					Splices <span>(max. {maxSplices}):</span>
				</p>
				<Box id="splices">
					<ul>{spliceID}</ul>
					<ul>{splicesArray}</ul>
				</Box>
			</Box>
		</Box>
	);
}

export default Stopwatch;
