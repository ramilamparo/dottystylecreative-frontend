import React from "react";
import { HomeSection as HomeSectionPresentational } from "../presentational/sections/home/HomeSection";

export const HomeSection = ({ id }: { id: string }) => {
	return (
		<HomeSectionPresentational
			id={id}
			title="Whitsundays"
			subtitle="A movie that's waiting to be written"
		/>
	);
};
