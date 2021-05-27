import React, { useMemo } from "react";
import { SolutionSection as SolutionSectionPresentational } from "components/presentational/sections/solution/SolutionSection";
import { Typography } from "components/presentational/Typography";
import styled from "styled-components";

const Text = styled(Typography)`
	&:not(:last-child) {
		margin-bottom: 1rem;
	}
`;

const TitleSpan = styled.span`
	display: block;
	line-height: 100%;
`;

export const SolutionSection = ({ id }: { id: string }) => {
	const leftContent = useMemo(() => {
		return (
			<>
				<Text>
					We knew movies rated high on the list of our target’s interests and, with
					incredible beaches, seaplanes, yachts and glamorous locations, the
					Whitsundays is the perfect setting for a movie.
				</Text>
				<Text>So we invited Australians to write it:</Text>
				<Text variant="title2">
					<TitleSpan>The Whitsundays.</TitleSpan>
					<TitleSpan>A movie that’s waiting to be written.</TitleSpan>
				</Text>
				<Text>
					We enlisted world-renowned screenwriter Craig Pearce as Script Supervisor.
					Then for 20 days we posted a daily storyboard image on Facebook and
					Instagram, inviting the public to write scenes for a chance to win a
					$10,000 luxury holiday.
				</Text>
			</>
		);
	}, []);

	const rightContent = useMemo(() => {
		return (
			<>
				<Text>
					The campaign launched with a trailer, radio and online advertising.
				</Text>
				<Text>
					We reacted to the storyline as it developed, selecting and treating images
					according to the previous winning scene.
				</Text>
				<Text>
					Each scene written and shared became a compelling “ad” for the Whitsundays.
				</Text>
				<Text>
					Together, a Hollywood screenwriter and the Australian public had created
					the world’s first crowd-sourced movie storyboard and a story universe with
					millions of possible permutations.
				</Text>
			</>
		);
	}, []);

	return (
		<SolutionSectionPresentational
			id={id}
			title="Solution"
			leftContent={leftContent}
			rightContent={rightContent}
		/>
	);
};
