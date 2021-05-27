import React from "react";
import styled from "styled-components";
import humansImage from "@assets/humans.png";
import pixelGridImage from "@assets/pixelgrid.png";
import backgroundImage from "@assets/water.png";
import { Icon } from "../../Icon";
import { Section } from "components/presentational/Section";
import { Title } from "./Title";

export interface HomeSectionProps {
	className?: string;
	title: string;
	subtitle: string;
	id?: string;
	onPlay: () => void;
}

const Container = styled(Section)`
	overflow-y: visible;
	display: flex;
`;

const StyledTitle = styled(Title)`
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const BackgroundImage = styled.img`
	width: 100%;
	position: absolute;
	object-fit: cover;
	top: 0;
	left: 0;
	z-index: -1;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
	mask: linear-gradient(white 80%, transparent);
`;
const PlayIcon = styled(Icon)`
	font-size: 12rem;
	color: white;
`;
const PlayButton = styled.button`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	cursor: pointer;
	opacity: 0.7;
	border: 5px solid white;
	background-color: transparent;
	border-radius: 100rem;
	padding: 1rem;
	z-index: 1;
`;
const LeftContainer = styled.div`
	width: 50%;
	position: relative;
	overflow: hidden;
`;
const RightContainer = styled.div`
	width: 50%;
	position: relative;
	overflow: hidden;
`;
const Humans = styled.img`
	width: 80%;
	position: absolute;
	top: 16%;
	opacity: 0.6;
`;
const PixelGridBackgroundImage = styled(BackgroundImage)`
	opacity: 0.3;
`;

export const HomeSection = ({
	id,
	title,
	subtitle,
	onPlay
}: HomeSectionProps) => {
	return (
		<Container id={id}>
			<BackgroundImage src={backgroundImage} alt="background" />
			<PixelGridBackgroundImage src={pixelGridImage} alt="background" />
			<LeftContainer>
				<StyledTitle title={title} subtitle={subtitle} />
			</LeftContainer>
			<PlayButton onClick={onPlay}>
				<PlayIcon>play_arrow</PlayIcon>
			</PlayButton>
			<RightContainer>
				<Humans src={humansImage} alt="actors" />
			</RightContainer>
		</Container>
	);
};
