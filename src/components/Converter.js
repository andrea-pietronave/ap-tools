import { React, useState, useEffect } from "react";
import { Box, TextField, MenuItem, InputAdornment } from "@mui/material";

import accelerationUnits from "../resources/accelerationUnits.json";
import angleUnits from "../resources/angleUnits.json";
import apparentPowerUnits from "../resources/apparentPowerUnits.json";
import areaUnits from "../resources/areaUnits.json";
import chargeUnits from "../resources/chargeUnits.json";
import currentUnits from "../resources/currentUnits.json";
import digitalUnits from "../resources/digitalUnits.json";
import eachUnits from "../resources/eachUnits.json";
import energyUnits from "../resources/energyUnits.json";
import forceUnits from "../resources/forceUnits.json";
import frequencyUnits from "../resources/frequencyUnits.json";
import illuminanceUnits from "../resources/illuminanceUnits.json";
import lengthUnits from "../resources/lengthUnits.json";
import massUnits from "../resources/massUnits.json";
import paceUnits from "../resources/paceUnits.json";
import powerUnits from "../resources/powerUnits.json";
import pressureUnits from "../resources/pressureUnits.json";
import reactiveEnergyUnits from "../resources/reactiveEnergyUnits.json";
import reactivePowerUnits from "../resources/reactivePowerUnits.json";
import speedUnits from "../resources/speedUnits.json";
import temperatureUnits from "../resources/temperatureUnits.json";
import timeUnits from "../resources/timeUnits.json";
import voltageUnits from "../resources/voltageUnits.json";
import volumeFlowRateUnits from "../resources/volumeFlowRateUnits.json";
import volumeUnits from "../resources/volumeUnits.json";

import unitsCategories from "../resources/unitsCategories.json";

import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import configureMeasurements, { allMeasures } from "convert-units";

function Converter() {
	const [firstUnit, setFirtUnit] = useState("");
	const [secondUnit, setSecondUnit] = useState("");
	const [firstValue, setFirstValue] = useState(0);
	const [secondValue, setSecondValue] = useState(0);
	const [unitCategory, setUnitCategory] = useState("");
	const [selectedUnits, setSelectedUnits] = useState([]);
	const convert = configureMeasurements(allMeasures);

	useEffect(() => {
		setFirstValue(0);
		setSecondValue(0);
		setFirtUnit("");
		setSecondUnit("");
		switch (unitCategory) {
		case "acceleration":
			setSelectedUnits(
				accelerationUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "angle":
			setSelectedUnits(
				angleUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "apparentPower":
			setSelectedUnits(
				apparentPowerUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "area":
			setSelectedUnits(
				areaUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "charge":
			setSelectedUnits(
				chargeUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "current":
			setSelectedUnits(
				currentUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "digital":
			setSelectedUnits(
				digitalUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "each":
			setSelectedUnits(
				eachUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "energy":
			setSelectedUnits(
				energyUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "force":
			setSelectedUnits(
				forceUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "frequency":
			setSelectedUnits(
				frequencyUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "illuminance":
			setSelectedUnits(
				illuminanceUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "length":
			setSelectedUnits(
				lengthUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))
			);
			break;
		case "mass":
			setSelectedUnits(
				massUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "pace":
			setSelectedUnits(
				paceUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "power":
			setSelectedUnits(
				powerUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "pressure":
			setSelectedUnits(
				pressureUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "reactiveEnergy":
			setSelectedUnits(
				reactiveEnergyUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "reactivePower":
			setSelectedUnits(
				reactivePowerUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "speed":
			setSelectedUnits(
				speedUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "temperature":
			setSelectedUnits(
				temperatureUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "time":
			setSelectedUnits(
				timeUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "voltage":
			setSelectedUnits(
				voltageUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "volumeFlowRate":
			setSelectedUnits(
				volumeFlowRateUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		case "volume":
			setSelectedUnits(
				volumeUnits.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						<span>{option.label}</span>
					</MenuItem>
				))
			);
			break;
		default:
			break;
		}
	}, [unitCategory]);

	useEffect(() => {
		try {
			if (firstUnit && secondUnit !== "") {
				setSecondValue(
					convert(parseFloat(firstValue)).from(firstUnit).to(secondUnit)
				);
			}
		} catch (error) {
			console.log(error);
		}
	}, [firstValue, firstUnit, secondUnit]);

	const invertUnits = function () {
		let tempFirst = firstUnit;
		setFirtUnit(secondUnit);
		setSecondUnit(tempFirst);
		tempFirst = firstValue;
		setFirstValue(secondValue);
		setSecondValue(tempFirst);
	};

	return (
		<Box
			id="converter-container"
			container
			display="flex"
			justifyContent="flex-start"
			alignItems="center"
			flexDirection="column"
		>
			<TextField
				select
				className="unit-category-selector"
				label="Category"
				defaultValue=""
				onChange={(e) => {
					setUnitCategory(e.target.value);
				}}
			>
				{unitsCategories.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</TextField>

			<Box
				container
				display="flex"
				id="unit-selector-container"
				justifyContent="flex-start"
				alignItems="center"
				flexDirection="row"
			>
				<TextField
					select
					id="first-unit-selector"
					className="unit-selector"
					label="From"
					disabled={unitCategory === "" ? true : false}
					value={firstUnit}
					onChange={(e) => {
						setFirtUnit(e.target.value);
					}}
				>
					{selectedUnits}
				</TextField>
				<CompareArrowsIcon className="invert-units" onClick={invertUnits} />

				<TextField
					select
					id="second-unit-selector"
					className="unit-selector"
					label="To"
					disabled={unitCategory === "" ? true : false}
					value={secondUnit}
					onChange={(e) => {
						setSecondUnit(e.target.value);
					}}
				>
					{selectedUnits}
				</TextField>
			</Box>
			<Box
				container
				display="flex"
				id="result-container"
				justifyContent="flex-start"
				alignItems="center"
				flexDirection="row"
			>
				<TextField
					label="From"
					type="number"
					value={firstValue}
					endadornment={<InputAdornment position="end">kg</InputAdornment>}
					disabled={
						unitCategory === "" || firstUnit === "" || secondUnit === ""
							? true
							: false
					}
					onChange={(e) => {
						setFirstValue(e.target.value);
					}}
				/>
				<TextField
					label="To"
					type="number"
					value={secondValue}
					disabled={
						unitCategory === "" || firstUnit === "" || secondUnit === ""
							? true
							: false
					}
					onChange={(e) => {
						setSecondValue(e.target.value);
					}}
				/>
			</Box>
		</Box>
	);
}

export default Converter;
