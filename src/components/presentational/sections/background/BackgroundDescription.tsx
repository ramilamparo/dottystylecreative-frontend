import React from "react";
import styled from "styled-components";
import { Typography } from "components/presentational/Typography";

export interface BackgroundDescriptionItem {
	title: string;
	content: string;
}

export interface BackgroundDescriptionProps extends BackgroundDescriptionItem {
	boldTitle?: boolean;
	className?: string;
}

const Container = styled.div`
	font-size: 1rem;
`;

const Title = styled(Typography)<{ $bold?: boolean }>`
	font-weight: 300;
	${(p) => p.$bold && `font-weight: 800;`}
	font-size: 5em;
`;

const Content = styled(Typography)`
	font-size: 2em;
	font-weight: 300;
`;

export const BackgroundDescription = ({
	content,
	title,
	boldTitle,
	className
}: BackgroundDescriptionProps) => {
	return (
		<Container className={className}>
			<Title $bold={boldTitle}>{title}</Title>
			<Content>{content}</Content>
		</Container>
	);
};
