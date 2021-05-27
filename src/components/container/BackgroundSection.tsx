import React from "react";
import { BackgroundSection as BackgroundSectionPresentational } from "components/presentational/sections/background/BackgroundSection";

export const BackgroundSection = ({ id }: { id: string }) => {
	return (
		<BackgroundSectionPresentational
			id={id}
			title="Whitsundays"
			subtitle="A movie that's waiting to be written"
			descriptions={[
				{
					title: "Background & Audience",
					content:
						"Tourism & Events Queensland wanted to increase consideration of The Whitsundays amongst ‘social fun seekers’; digitally savvy consumers that socialise substantially online."
				},
				{
					title: "Problem",
					content:
						"The Whitsundays was losing its cachet as an aspirational holiday location."
				},
				{
					title: "Objective",
					content:
						"Shift perceptions and re-build the Whitsundays' social currency as a world-class destination."
				}
			]}
		/>
	);
};
