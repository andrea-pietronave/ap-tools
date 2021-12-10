import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

function About() {
	return (
		<Box
			id="about-container"
			display="flex"
			alignContent="center"
			justifyContent="center"
			flexDirection="column"
		>
			<h1>About this site</h1>
			<h2>Description</h2>
			<p>
				This is a site full of helpfull tools. Every tools has various settings
				that can be changed to fit your need.
			</p>
			<h2>Technology</h2>
			<List dense className="stack-list">
				<ListItem>
					<ListItemText primary="HTML" />
				</ListItem>
				<ListItem>
					<ListItemText primary="SASS" />
				</ListItem>
				<ListItem>
					<ListItemText primary="Javascript" />
				</ListItem>
				<ListItem>
					<ListItemText primary="React" />
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Mui (Material Design)"
						secondary={
							<a href="https://mui.com/" target="_blank" rel="noreferrer">
								Mui Website
							</a>
						}
					/>
				</ListItem>
			</List>
			<h2>Created By</h2>
			<List dense className="contacts-list">
				<ListItem>
					<ListItemText primary="Andrea Pietronave" />
				</ListItem>
				<ListItem>
					<ListItemText primary="andrea.pietronave@outlook.it" />
				</ListItem>
				<ListItem>
					<ListItemText
						primary={
							<a
								href="https://www.andreapietronave.com/"
								target="_blank"
								rel="noreferrer"
							>
								www.andreapietronave.com
							</a>
						}
					/>
				</ListItem>
			</List>
		</Box>
	);
}

export default About;
