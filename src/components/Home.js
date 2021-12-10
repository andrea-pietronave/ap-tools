import React from "react";
import { Box, Card, CardActions, CardContent, Button } from "@mui/material";

function Home() {
	return (
		<Box
			id="home-container"
			display="flex"
			alignContent="center"
			flexDirection="column"
		>
			<Box
				className="header"
				display="flex"
				alignContent="center"
				justifyContent="start"
				flexDirection="column"
			>
				<div className="title-div">
					<h1>AP Tools</h1>
					<h2>A simple website for simple tools.</h2>
					<h3>Current Tools</h3>
				</div>
				<Box
					display="flex"
					alignContent="center"
					justifyContent="start"
					flexDirection="column"
				>
					<Card className="tool-card border">
						<CardContent>
							<h4>Stopwatch</h4>
							<p>
								<span className="simple-span">Simple</span> stopwatch with
								configurable splices number.
							</p>
						</CardContent>
						<CardActions>
							<Button href="/tool/stopwatch">To the tool.</Button>
						</CardActions>
					</Card>
					<Card className="tool-card border">
						<CardContent>
							<h4>Timer</h4>
							<p>
								<span className="simple-span">Simple</span> timer. Click on the
								time to configure it.
							</p>
						</CardContent>
						<CardActions>
							<Button href="/tool/timer">To the tool.</Button>
						</CardActions>
					</Card>
					<Card className="tool-card border">
						<CardContent>
							<h4>Counter</h4>
							<p>
								<span className="simple-span">Simple</span> counter, can
								configure how much to increase or decrease with each click.
							</p>
						</CardContent>
						<CardActions>
							<Button href="/tool/counter">To the tool.</Button>
						</CardActions>
					</Card>
					<Card className="tool-card border">
						<CardContent>
							<h4>Converter</h4>
							<p>
								<span className="simple-span">Simple</span> converter. Many
								units to choose from.
							</p>
						</CardContent>
						<CardActions>
							<Button href="/tool/converter">To the tool.</Button>
						</CardActions>
					</Card>
					<Card className="tool-card border">
						<CardContent>
							<h4>Timezone</h4>
							<p>Coming soon...</p>
						</CardContent>
						<CardActions>
							<Button href="/home">To the tool.</Button>
						</CardActions>
					</Card>
				</Box>
			</Box>
		</Box>
	);
}

export default Home;
