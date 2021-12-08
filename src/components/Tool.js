import React from "react";
import Converter from "./Converter";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";
import Counter from "./Counter";

function Tool(value) {
	switch (value.value) {
	case "converter":
		return <Converter></Converter>;
	case "stopwatch":
		return <Stopwatch></Stopwatch>;
	case "timer":
		return <Timer></Timer>;
	case "counter":
		return <Counter></Counter>;

	default:
		console.log(value);
		return <p></p>;
	}
}

export default Tool;
