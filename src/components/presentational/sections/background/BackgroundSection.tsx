import React from "react";
import { Section } from "components/presentational/Section";
import styled from "styled-components";
import { Title } from "../home/Title";
import {
	BackgroundDescription,
	BackgroundDescriptionItem
} from "./BackgroundDescription";

export interface BackgroundSectionProps {
	descriptions: BackgroundDescriptionItem[];
	title: string;
	subtitle: string;
	id?: string;
}

const Container = styled(Section)`
	display: flex;
	& > * {
		width: 50%;
	}
`;

const BackgroundDescriptionContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	padding: 0 10rem;
`;

const LeftContainer = styled.div`
	position: relative;
`;

const RightContainer = styled.div`
	position: relative;
`;

const StyledTitle = styled(Title)`
	position: absolute;
	font-size: 1rem;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const BackgroundSection = ({
	descriptions,
	subtitle,
	title,
	id
}: BackgroundSectionProps) => {
	return (
		<Container id={id}>
			<LeftContainer>
				<StyledTitle title={title} subtitle={subtitle} />
			</LeftContainer>
			<RightContainer>
				<BackgroundDescriptionContainer>
					{descriptions.map((item, index) => {
						return (
							<BackgroundDescription
								key={item.title}
								title={item.title}
								content={item.content}
								boldTitle={index === 0}
							/>
						);
					})}
				</BackgroundDescriptionContainer>
			</RightContainer>
		</Container>
	);
};
