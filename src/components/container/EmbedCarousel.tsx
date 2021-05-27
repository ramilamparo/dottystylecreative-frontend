import React, { useState } from "react";
import { Carousel } from "components/presentational/Carousel";
import { VideoEmbed } from "components/presentational/VideoEmbed";
import styled from "styled-components";

const embeds = [
	["Cute Seal!", "https://www.youtube.com/watch?v=y2SvailvvHQ"],
	["Definitely not rick roll.", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]
];

const StyledVideoEmbed = styled(VideoEmbed)`
	height: 100%;
	width: 100%;
`;

export const EmbedCarousel = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const pages = embeds.map(([title, link]) => {
		return <StyledVideoEmbed title={title} link={link} />;
	}, []);

	return (
		<Carousel
			pages={pages.length}
			onPageChange={setCurrentPage}
			currentPageIndex={currentPage}
		>
			{pages[currentPage]}
		</Carousel>
	);
};
