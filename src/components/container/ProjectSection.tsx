import React, { useMemo } from "react";
import {
	ProjectSection as ProjectSectionPresentational,
	ProjectSectionPage
} from "../presentational/sections/project/ProjectSection";
import { EmbedCarousel } from "./EmbedCarousel";
import { RandomCarousel } from "./RandomCarousel";

export const ProjectSection = ({ id }: { id: string }) => {
	const pages = useMemo((): ProjectSectionPage[] => {
		return [
			{
				title: "Video",
				left: <EmbedCarousel key={0} />,
				description:
					"A 60 second promotional movie trailer played on TV, online as pre rolls and via Facebook, to promote the movie that was waiting to be written to our movie-loving target audience, and encourage them to enter."
			},
			{
				title: "Photography",
				left: <RandomCarousel key={1} />,
				description:
					"The complete movie storyboard showcased the entire story, completely inspired by stunning images captured in the Whitsundays, with all 20 winning scenes accompanying the images."
			},
			{
				title: "Social",
				left: <RandomCarousel key={2} />,
				description:
					"The complete movie storyboard showcased the entire story, completely inspired by stunning images captured in the Whitsundays, with all 20 winning scenes accompanying the images."
			},
			{
				title: "PR",
				left: <RandomCarousel key={3} />,
				description:
					"We enlisted the help of Craig Pearce as script supervisor, who was tasked with choosing the winner each day to ensure the story flowed properly, and providing daily writing tips to encourage people to take part."
			},
			{
				title: "Radio",
				left: <RandomCarousel key={4} />,
				description:
					"Live reads from NOVA presenters reflected the ever-evolving story of Jake in real time, and encouraged people to get involved to shape the story themselves."
			}
		];
	}, []);

	return <ProjectSectionPresentational id={id} pages={pages} />;
};
