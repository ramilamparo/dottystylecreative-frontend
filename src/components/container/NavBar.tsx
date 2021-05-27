import React from "react";
import { NavBar as NavBarPresentational } from "components/presentational/NavBar/NavBar";

export const NavBar = () => {
	return (
		<NavBarPresentational
			links={[
				{
					label: "Background & Challenge",
					to: "#Background"
				},
				{
					label: "Solution",
					to: "#Solution"
				},
				{
					label: "Slideshow",
					to: "#Project"
				}
			]}
			onPlay={() => {}}
			onDownloadBoard={() => {}}
		/>
	);
};
