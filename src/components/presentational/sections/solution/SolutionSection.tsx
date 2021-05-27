import { Section } from "components/presentational/Section";
import { Typography } from "components/presentational/Typography";
import React, { ReactNode } from "react";
import styled from "styled-components";

export interface SolutionSectionProps {
	title: string;
	leftContent: ReactNode;
	rightContent: ReactNode;
	id?: string;
}

const Title = styled(Typography)`
	font-weight: 500;
	font-size: 5rem;
	text-align: center;
	margin-bottom: 3rem;
`;

const Container = styled(Section)``;

const ContentContainer = styled.div`
	display: flex;

	& > * {
		width: 50%;
	}
`;

const LeftContainer = styled.div`
	padding: 0 10rem;
`;

const RightContainer = styled.div`
	padding: 0 10rem;
`;

const CenteredContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
`;

export const SolutionSection = ({
	title,
	leftContent,
	rightContent,
	id
}: SolutionSectionProps) => {
	return (
		<Container id={id}>
			<CenteredContainer>
				<Title variant="title">{title}</Title>
				<ContentContainer>
					<LeftContainer>{leftContent}</LeftContainer>
					<RightContainer>{rightContent}</RightContainer>
				</ContentContainer>
			</CenteredContainer>
		</Container>
	);
};
