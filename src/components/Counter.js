/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
	Grid,
	Button,
	TextField,
	Checkbox,
	FormControlLabel,
} from "@mui/material";
import {} from "@mui/system";
//import "../styles/Counter.css";

function Counter() {
	let [counter, setCounter] = useState(0);
	let [allowNegative, setAllowNegative] = useState(true);
	let [incrementAmount, setIncrementAmount] = useState(1);
	let [decrementAmount, setDecrementAmount] = useState(-1);

	const increment = function () {
		setCounter(counter + parseInt(incrementAmount));
	};

	const decrement = function () {
		if (allowNegative || counter + parseInt(decrementAmount) >= 0) {
			setCounter(counter + parseInt(decrementAmount));
		}
	};

	const resetCounter = function () {
		setCounter(0);
	};

	const resetSettings = function () {
		setIncrementAmount(1);
		setDecrementAmount(-1);
	};

	return (
		<Grid
			container
			justifyContent="space-around"
			alignItems="center"
			className="counter-container"
		>
			<Grid
				className="innerGrid"
				container
				xs={4}
				item
				direction="column"
				alignItems="center"
				justifyContent="space-around"
			>
				<Grid item className="counter">
					{counter}
				</Grid>
				<Grid
					item
					container
					justifyContent="space-around"
					alignItems="center"
					direction="row-reverse"
				>
					<Grid item>
						<Button
							variant="contained"
							className="incr-btn"
							onClick={increment}
						>
							{incrementAmount}
						</Button>
					</Grid>
					<Grid item>
						<Button
							variant="contained"
							className="decr-btn"
							onClick={decrement}
						>
							{decrementAmount}
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				className="innerGrid"
				container
				xs={4}
				item
				direction="column"
				justifyContent="space-around"
				alignItems="center"
			>
				<Grid
					container
					item
					className="innerGrid"
					justifyContent="space-around"
					direction="row-reverse"
				>
					<Grid item>
						<TextField
							id="incrementAmount"
							label="Increment Amount"
							variant="standard"
							type="number"
							value={incrementAmount}
							InputProps={{
								inputProps: {
									min: 0,
								},
							}}
							onChange={(e) => {
								setIncrementAmount(e.target.value);
							}}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid>
					<Grid item>
						<TextField
							id="decrementAmount"
							label="Decrement Amount"
							variant="standard"
							type="number"
							value={decrementAmount}
							InputProps={{
								inputProps: {
									max: 0,
								},
							}}
							onChange={(e) => {
								setDecrementAmount(e.target.value);
							}}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid>
					<Grid item>
						<FormControlLabel
							control={
								<Checkbox
									defaultChecked
									onChange={() => setAllowNegative(!allowNegative)}
									name="gilad"
								/>
							}
							label="Allow negative counter"
						/>
					</Grid>
				</Grid>

				<Grid
					container
					item
					className="innerGrid"
					justifyContent="space-around"
					direction="row"
				>
					<Button variant="contained" color="warning" onClick={resetCounter}>
						Reset counter
					</Button>
					<Button variant="contained" color="warning" onClick={resetSettings}>
						Reset settings
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Counter;
