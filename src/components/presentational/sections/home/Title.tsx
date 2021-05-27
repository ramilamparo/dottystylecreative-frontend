import React from "react";
import styled from "styled-components";
import { Typography } from "components/presentational/Typography";

export interface TitleProps {
	title: string;
	subtitle: string;
	className?: string;
}

const The = styled(Typography)`
	text-transform: uppercase;
	font-size: 4em;
	line-height: 0;
	width: 30%;
	text-align: right;
`;
const TitleText = styled(Typography)`
	text-transform: uppercase;
	font-size: 7em;
`;
const Subtitle = styled(Typography)`
	text-transform: uppercase;
	display: flex;
	font-size: 2em;
	text-align: center;
	line-height: 0;
	justify-content: space-between;
	& > * {
		flex-grow: 1;
	}
`;
const TitleContainer = styled.h1`
	font-size: 1rem;
	display: inline-block;
`;

export const Title = ({ className, title, subtitle }: TitleProps) => {
	return (
		<TitleContainer className={className}>
			<The forwardedAs="span">The</The>
			<TitleText forwardedAs="span">{title}</TitleText>
			<Subtitle forwardedAs="span">
				{subtitle.split("").map((char) => {
					return (
						<span
							style={{
								minWidth: char === " " ? "1rem" : ""
							}}
						>
							{char}
						</span>
					);
				})}
			</Subtitle>
		</TitleContainer>
	);
};
