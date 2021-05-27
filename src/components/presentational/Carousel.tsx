import React, { ReactNode, useMemo } from "react";
import { Pager } from "components/presentational/Pager";
import styled from "styled-components";

export interface CarouselProps {
	className?: string;
	children: ReactNode;
	pages: number;
	onPageChange: (pageIndex: number) => void;
	currentPageIndex: number;
}

export const Container = styled.div`
	height: 100%;
`;

export const ContentContainer = styled.div`
	height: 100%;
`;

export const Carousel = ({
	className,
	children,
	onPageChange,
	pages,
	currentPageIndex
}: CarouselProps) => {
	const pageDots = useMemo(() => {
		const dotCallbacks: Array<() => void> = [];

		for (let i = 0; i < pages; i++) {
			dotCallbacks.push(() => onPageChange(i));
		}

		return dotCallbacks;
	}, [pages, onPageChange]);

	return (
		<Container className={className}>
			<ContentContainer>{children}</ContentContainer>
			<Pager type="horizontal" count={pageDots} active={currentPageIndex} />
		</Container>
	);
};
