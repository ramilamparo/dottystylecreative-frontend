import React, { ReactNode } from "react";
import styled from "styled-components";
import { Typography } from "../Typography";

export interface NavBarButtonProps {
	className?: string;
	onClick?: () => void;
	children?: ReactNode;
}

const Button = styled.button`
	${Typography.baseTypographyStyle}
	background-color: #282828;
	font-size: 1.5rem;
	border-radius: 1rem;
	padding: 1rem 1rem;
	color: white;
	display: inline-flex;
	align-items: center;
	cursor: pointer;
`;

export const NavBarButton = ({
	children,
	className,
	onClick
}: NavBarButtonProps) => {
	return (
		<Button className={className} onClick={onClick}>
			{children}
		</Button>
	);
};
