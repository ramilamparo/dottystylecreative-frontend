import React, { ReactNode, useCallback, useState } from "react";
import { Section } from "components/presentational/Section";
import styled from "styled-components";
import { Button } from "components/presentational/Button";
import { Typography } from "components/presentational/Typography";

export interface ProjectSectionProps {
	className?: string;
	pages: ProjectSectionPage[];
	id?: string;
}

export interface ProjectSectionPage {
	title: string;
	left: ReactNode;
	description: string;
}

const Container = styled(Section)``;

const ActionsContainer = styled.div`
	margin-bottom: 1rem;
`;

const LeftContainer = styled.div`
	width: 60%;
	flex-shrink: 0;
`;

const RightContainer = styled.div`
	padding-left: 5rem;
`;

const StyledButton = styled(Button)`
	&:not(:last-child) {
		margin-right: 1rem;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	height: 100%;
`;

const CenteredContainer = styled.div`
	padding: 0 20rem;
	width: 100%;
	height: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const ProjectSection = ({
	id,
	className,
	pages
}: ProjectSectionProps) => {
	const [selectedItem, setSelectedItem] = useState(0);

	const setItem = useCallback(
		(index: number) => () => {
			setSelectedItem(index);
		},
		[]
	);

	const activeItem = pages[selectedItem];

	return (
		<Container id={id} className={className}>
			<CenteredContainer>
				<ActionsContainer>
					{pages.map(({ title }, index) => {
						return (
							<StyledButton
								active={selectedItem === index}
								key={title}
								onClick={setItem(index)}
							>
								{title}
							</StyledButton>
						);
					})}
				</ActionsContainer>
				<ContentContainer>
					<LeftContainer>{activeItem.left}</LeftContainer>
					<RightContainer>
						<Typography variant="title2">{activeItem.title}</Typography>
						<Typography>{activeItem.description}</Typography>
					</RightContainer>
				</ContentContainer>
			</CenteredContainer>
		</Container>
	);
};
