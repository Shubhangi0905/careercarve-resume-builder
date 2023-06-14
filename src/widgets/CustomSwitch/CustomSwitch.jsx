import React, { useState } from "react";

import "./CustomSwitch.css";

const Switch = () => {
	const [checked, setChecked] = useState(false);
	const [id] = useState(`toggle-${Math.random().toString(36).substr(2, 9)}`);
	const handleToggle = () => {
		setChecked(!checked);
	};

	return (
		<div className={`switch ${checked ? "checked" : ""}`}>
			<input
				type="checkbox"
				id={id}
				checked={checked}
				onChange={handleToggle}
			/>
			<label htmlFor={id}></label>
			<span className="icon">{checked ? "\u2713" : "\u2715"}</span>
		</div>
	);
};

export default Switch;
