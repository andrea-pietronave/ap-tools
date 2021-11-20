import React from "react";
//import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import {
	List,
	ListItemText,
	ListItemButton,
	Collapse,
	ListItemIcon,
} from "@mui/material";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import TimerIcon from "@mui/icons-material/Timer";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box } from "@mui/system";

function Sidebar() {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<Box className="sidebar">
			<List>
				<ListItemButton component={Link} to="/home">
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText>Home</ListItemText>
				</ListItemButton>
				<ListItemButton component={Link} to="/about">
					<ListItemIcon>
						<InfoIcon />
					</ListItemIcon>
					<ListItemText>About</ListItemText>
				</ListItemButton>
				<ListItemButton onClick={handleOpen}>
					<ListItemText>Toolbox</ListItemText>
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItemButton
							component={Link}
							to="/tool/stopwatch"
							sx={{ pl: 4 }}
						>
							<ListItemIcon>
								<HourglassTopIcon />
							</ListItemIcon>
							<ListItemText>Stopwatch</ListItemText>
						</ListItemButton>
					</List>
					<List component="div" disablePadding>
						<ListItemButton component={Link} to="/tool/counter" sx={{ pl: 4 }}>
							<ListItemIcon>
								<AddCircleOutlineIcon />
							</ListItemIcon>
							<ListItemText>Counter</ListItemText>
						</ListItemButton>
					</List>
					<List component="div" disablePadding>
						<ListItemButton component={Link} to="/tool/timer" sx={{ pl: 4 }}>
							<ListItemIcon>
								<TimerIcon />
							</ListItemIcon>
							<ListItemText>Timer</ListItemText>
						</ListItemButton>
					</List>
					<List component="div" disablePadding>
						<ListItemButton component={Link} to="/tool/toolbox" sx={{ pl: 4 }}>
							<ListItemIcon>
								<TimerIcon />
							</ListItemIcon>
							<ListItemText>Custom Toolbox</ListItemText>
						</ListItemButton>
					</List>
				</Collapse>
			</List>
		</Box>
	);
}

export default Sidebar;
