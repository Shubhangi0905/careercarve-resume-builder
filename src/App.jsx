import "./App.css";
import { SECTIONS } from "./constants/section";
import Tile from "./widgets/Tile";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(purple[500]),
	backgroundColor: purple[500],
	textTransform: "none",
	"&:hover": {
		backgroundColor: purple[700],
	},
}));

function App() {
	return (
		<div className="app">
			<h2>Select your sections</h2>

			<div className="app__tiles">
				{Object.keys(SECTIONS).map((k) => (
					<Tile name={k} key={k} description={SECTIONS[k]} />
				))}
			</div>

			<ColorButton
				variant="contained"
				style={{ paddingLeft: "10%", paddingRight: "10%" }}
			>
				Save and Next
			</ColorButton>
		</div>
	);
}

export default App;
