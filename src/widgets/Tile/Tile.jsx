// mui
import MenuIcon from "@mui/icons-material/Menu";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

// style
import "./Tile.css";
import { useState } from "react";
import { Tooltip } from "@mui/material";

// helpers
import {
	handleDragEnd,
	handleDragEnter,
	handleDragLeave,
	handleDragOver,
	handleDragStart,
	handleDrop,
} from "../../helper/dragNdrop";
import Switch from "../CustomSwitch/CustomSwitch";

export default function Tile({ name, description }) {
	const [title, setTitle] = useState(name);
	const [isEditing, setIsEditing] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	const getTitle = () => {
		if (!isEditing) return title;

		return <input value={title} onChange={(e) => setTitle(e.target.value)} />;
	};

	const getEditNSaveBtn = () => {
		if (!isEditing)
			return (
				<IconButton onClick={() => setIsEditing(true)} color="inherit">
					<EditOutlinedIcon fontSize="small" />
				</IconButton>
			);
		return (
			<Button color="inherit" onClick={() => setIsEditing(false)}>
				Save
			</Button>
		);
	};

	return (
		<div
			draggable
			onDragEnter={handleDragEnter}
			onDragStart={handleDragStart}
			onDrop={handleDrop}
			onDragEnd={handleDragEnd}
			onDragLeave={handleDragLeave}
			onDragOver={handleDragOver}
			className="tile"
		>
			<div className="tile__left">
				<div style={{ cursor: "move" }}>
					<MenuIcon />
				</div>
				<Tooltip title={description}>
					<InfoOutlinedIcon fontSize="small" />
				</Tooltip>
				{getTitle()}
			</div>

			<div className="tile__right">
				{getEditNSaveBtn()}
				<Switch />
			</div>
		</div>
	);
}
