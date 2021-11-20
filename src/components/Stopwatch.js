/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import {
	Grid,
	Button,
	TextField,
	Checkbox,
	FormControlLabel,
	Box,
} from "@mui/material";

function Stopwatch() {
	let [timer, setTimer] = useState(0);
	let [active, setActive] = useState(false);
	let [splices, setSplices] = useState([]);
	let [splicesArray, setSplicesArray] = useState([]);
	let [maxSplices, setMaxSplices] = useState(5);
	const countRef = useRef(null);

	const formatTime = () => {
		const getHundredSeconds = `0${timer}`.slice(-2);
		const seconds = `${Math.floor(timer / 100)}`;
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
		setSplices([]);
		setSplicesArray([]);
	};

	const pauseTimer = function () {
		setActive(false);
		console.log(active);
		clearInterval(countRef.current);
	};

	const spliceTimer = function () {
		splices.unshift(formatTime(timer));
		if (splices.length > maxSplices) {
			splicesArray.pop();
			splicesArray.unshift(
				<p key={splicesArray.length}>{formatTime(timer)}</p>
			);
		} else {
			splicesArray.unshift(
				<p key={splicesArray.length}>{formatTime(timer)}</p>
			);
		}
	};

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
					<p className="timer">{formatTime(timer)}</p>
					<Box container item justifyContent="center" className="timer-buttons">
						<Button variant="contained" color="error" onClick={resetTimer}>
							Reset timer
						</Button>
						<Button variant="contained" color="warning" onClick={pauseTimer}>
							Pause timer
						</Button>
						<Button variant="contained" onClick={spliceTimer}>
							Splice timer
						</Button>
						<Button variant="contained" color="success" onClick={startTimer}>
							Start timer
						</Button>
					</Box>
				</Box>
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
							setMaxSplices(e.target.value);
						}}
						InputLabelProps={{
							shrink: true,
						}}
					/>
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
				<Box>{splicesArray}</Box>
			</Box>
		</Box>
	);
}

export default Stopwatch;
