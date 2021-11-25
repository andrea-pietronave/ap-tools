/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import {
	Grid,
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Checkbox,
	LinearProgress,
	FormControlLabel,
	Box,
} from "@mui/material";

function Timer() {
	const [defaultTimer, setDefaultTimer] = useState(60);
	const [timer, setTimer] = useState(defaultTimer);
	const [active, setActive] = useState(false);
	const [open, setOpen] = React.useState(false);
	const handleOpen = function () {
		pauseTimer();
		setDefaultTimer(0);
		setOpen(true);
	};
	const handleClose = function () {
		setOpen(false);
	};
	const handleCloseSuccess = function () {
		let hours = !isNaN(parseInt(document.getElementById("hours").value))
			? parseInt(document.getElementById("hours").value)
			: 0;
		let minutes = !isNaN(parseInt(document.getElementById("minutes").value))
			? parseInt(document.getElementById("minutes").value)
			: 0;
		let seconds = !isNaN(parseInt(document.getElementById("seconds").value))
			? parseInt(document.getElementById("seconds").value)
			: 0;
		console.log(hours, minutes, seconds);
		setDefaultTimer(hours * 3600 + minutes * 60 + seconds);
		setOpen(false);
	};

	const countRef = useRef(null);

	const formatTime = (deltaTimer) => {
		//const getHundredSeconds = `0${deltaTimer}`.slice(-2);
		const seconds = `${Math.floor(deltaTimer)}`;
		const getSeconds = `0${seconds % 60}`.slice(-2);
		const minutes = `${Math.floor(seconds / 60)}`;
		const getMinutes = `0${minutes}`.slice(-2);
		const hours = `0${Math.floor(minutes / 60)}`.slice(-2);
		const getHours = `0${hours % 24}`.slice(-2);

		return (
			<div>
				<span>{getHours}</span>
				<span>:</span>
				<span>{getMinutes}</span>
				<span>:</span>
				<span>{getSeconds}</span>
			</div>
		);
	};

	const startTimer = function () {
		setActive(true);
		countRef.current = setInterval(() => {
			console.log(timer);
			if (timer > 0) {
				setTimer((timer) => timer - 1);
			} else {
				alarm();
			}
		}, 1000);
	};

	const alarm = function () {
		pauseTimer();
		console.log("!");
	};

	const resetTimer = function () {
		setActive(false);
		clearInterval(countRef.current);
		setTimer(defaultTimer);
	};

	const pauseTimer = function () {
		setActive(false);
		console.log(active);
		clearInterval(countRef.current);
	};

	const normalise = function (value) {
		return (value * 100) / defaultTimer;
	};

	useEffect(() => {
		setTimer(defaultTimer);
	}, [defaultTimer]);

	return (
		<Box
			id="timer-container"
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
					<p className="timer" onClick={handleOpen}>
						{formatTime(timer)}
					</p>
					<LinearProgress
						variant="determinate"
						value={normalise(timer)}
						sx={{ width: "100%", marginBottom: "20px" }}
					/>

					<Box container item justifyContent="center" className="timer-buttons">
						<Button
							id="resetButton"
							variant="contained"
							color="error"
							onClick={resetTimer}
						>
							Reset timer
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
					<Dialog open={open} onClose={handleClose}>
						<DialogTitle>Options</DialogTitle>
						<DialogContent sx={{ display: "flex" }}>
							<TextField
								autoFocus
								margin="dense"
								id="hours"
								label="Hours"
								type="number"
								variant="standard"
								InputProps={{
									inputProps: {
										min: 0,
										max: 24,
									},
								}}
								InputLabelProps={{
									shrink: true,
								}}
								onFocus={(e) => {
									e.target.select();
								}}
								onBlur={(e) => {
									if (e.target.value.length == 0) {
										e.target.value = 0;
									}
								}}
								onChange={(e) => {
									console.log(e.target.value);
									if (e.target.value > 24) {
										e.target.value = 24;
									}

									if (e.target.value.length == 2) {
										document.getElementById("minutes").focus();
									}
								}}
							/>
							<TextField
								margin="dense"
								id="minutes"
								label="Minutes"
								type="number"
								variant="standard"
								InputProps={{
									inputProps: {
										min: 0,
										max: 60,
									},
								}}
								InputLabelProps={{
									shrink: true,
								}}
								onFocus={(e) => {
									e.target.select();
								}}
								onBlur={(e) => {
									if (e.target.value.length == 0) {
										e.target.value = 0;
									}
								}}
								onChange={(e) => {
									if (e.target.value > 59) {
										e.target.value = 59;
									}

									if (e.target.value.length == 2) {
										document.getElementById("seconds").focus();
									}
								}}
							/>
							<TextField
								margin="dense"
								id="seconds"
								label="Seconds"
								type="number"
								variant="standard"
								InputProps={{
									inputProps: {
										min: 0,
										max: 60,
									},
								}}
								InputLabelProps={{
									shrink: true,
								}}
								onFocus={(e) => {
									e.target.select();
								}}
								onBlur={(e) => {
									if (e.target.value.length == 0) {
										e.target.value = 0;
									}
								}}
								onChange={(e) => {
									if (e.target.value > 59) {
										e.target.value = 59;
									}
								}}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose}>Cancel</Button>
							<Button onClick={handleCloseSuccess}>Apply</Button>
						</DialogActions>
					</Dialog>
				</Box>
			</Box>
		</Box>
	);
}

export default Timer;
