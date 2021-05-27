import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon";
import { NavBarButton } from "./NavBarButton";
import { NavBarLink } from "./NavBarLink";

export interface NavBarProps {
	links: Array<{ to: string; label: string }>;
	onPlay: () => void;
	onDownloadBoard: () => void;
}

const Container = styled.nav`
	position: fixed;
	background-color: #333;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 1.5rem 20rem;
	z-index: 1;
	justify-content: space-between;
`;

const NavigationContainer = styled.div`
	display: flex;
	align-items: center;
`;

const StyledIcon = styled(Icon)`
	font-size: 2rem;
	&:not(:last-child) {
		margin-right: 1rem;
	}
`;

export const NavBar = ({ links, onDownloadBoard, onPlay }: NavBarProps) => {
	return (
		<Container>
			<NavigationContainer>
				<NavBarButton onClick={onPlay}>
					<StyledIcon>play_arrow</StyledIcon>
				</NavBarButton>
				{links.map((link) => {
					return (
						<NavBarLink key={link.to} to={link.to}>
							{link.label}
						</NavBarLink>
					);
				})}
			</NavigationContainer>
			<NavBarButton onClick={onDownloadBoard}>
				<StyledIcon>download</StyledIcon>
				<span>Download Board</span>
			</NavBarButton>
		</Container>
	);
};
