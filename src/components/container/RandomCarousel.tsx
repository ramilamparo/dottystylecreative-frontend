import React, { useMemo, useState } from "react";
import * as faker from "faker";
import { Carousel } from "components/presentational/Carousel";
import styled from "styled-components";

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const RandomCarousel = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const embeds = useMemo(() => {
		const embeds: string[][] = [];

		for (let i = 0; i < 5; i++) {
			embeds.push([
				faker.lorem.words(2),
				`${faker.image.cats()}?id=${Math.random()}`
			]);
		}

		return embeds;
	}, []);

	const pages = embeds.map(([title, link]) => {
		return <Image alt={title} src={link} />;
	}, []);

	return (
		<Carousel
			currentPageIndex={currentPage}
			pages={pages.length}
			onPageChange={setCurrentPage}
		>
			{pages[currentPage]}
		</Carousel>
	);
};
